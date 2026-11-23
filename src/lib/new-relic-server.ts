import { after } from "next/server";

const monitoredRoutes = [
  "/resume/pdf",
  "/resume/docx",
  "/case-study/[slug]",
] as const;

type RequestOutcome = {
  event: "request.succeeded" | "request.failed";
  route: (typeof monitoredRoutes)[number];
  method: string;
  status: number;
  requestId: string;
  durationMs?: number;
};

async function sendRequestOutcome(outcome: RequestOutcome) {
  const licenseKey = process.env.NEW_RELIC_LICENSE_KEY?.trim();
  const logUrl = process.env.NEW_RELIC_LOG_URL?.trim();
  if (!licenseKey || !logUrl) return;

  try {
    const response = await fetch(logUrl, {
      method: "POST",
      headers: {
        "Api-Key": licenseKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: outcome.event,
        "service.name": "vivek-tech-resume",
        "event.name": outcome.event,
        "http.route": outcome.route,
        "http.method": outcome.method,
        "http.status_code": outcome.status,
        "request.id": outcome.requestId,
        "duration.ms": outcome.durationMs,
      }),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(2_000),
    });

    if (!response.ok) {
      console.warn("New Relic Log API rejected the request.", response.status);
    }
  } catch {
    console.warn("New Relic Log API request failed.");
  }
}

export function withRequestLogging<Args extends [Request, ...unknown[]]>(
  route: RequestOutcome["route"],
  handler: (...args: Args) => Response | Promise<Response>,
) {
  return async (...args: Args) => {
    const startedAt = performance.now();
    const response = await handler(...args);
    const { status } = response;
    if (status >= 400 && status < 500) return response;

    const outcome: RequestOutcome = {
      event: status >= 500 ? "request.failed" : "request.succeeded",
      route,
      method: args[0].method,
      status,
      requestId: crypto.randomUUID(),
      durationMs: Math.round(performance.now() - startedAt),
    };
    after(() => sendRequestOutcome(outcome));

    const headers = new Headers(response.headers);
    headers.set("X-Request-ID", outcome.requestId);
    return new Response(response.body, {
      status,
      statusText: response.statusText,
      headers,
    });
  };
}

export async function logUncaughtRequestError(method: string, routePath: string) {
  const route = monitoredRoutes.find((value) => value === routePath);
  if (!route) return;

  await sendRequestOutcome({
    event: "request.failed",
    route,
    method,
    status: 500,
    requestId: crypto.randomUUID(),
  });
}
