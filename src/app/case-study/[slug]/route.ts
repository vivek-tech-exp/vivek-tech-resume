import { NextResponse } from "next/server";

import {
  caseStudyLinks,
  isCaseStudySlug,
} from "@/lib/case-study-links";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;

  if (!isCaseStudySlug(slug)) {
    return new NextResponse("Case study not found.", { status: 404 });
  }

  return NextResponse.redirect(caseStudyLinks[slug].notionUrl, {
    status: 302,
    headers: {
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
