import type { Instrumentation } from "next";

import { logUncaughtRequestError } from "@/lib/new-relic-server";

export const onRequestError: Instrumentation.onRequestError = async (
  _error,
  request,
  context,
) => {
  if (context.routeType === "route") {
    await logUncaughtRequestError(request.method, context.routePath);
  }
};
