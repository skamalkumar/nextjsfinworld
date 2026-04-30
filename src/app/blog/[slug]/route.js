import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;

  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/content/articles/${slug}.html`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return new NextResponse("Post not found", { status: 404 });
    }

    const html = await res.text();

    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return new NextResponse("Error loading post", { status: 500 });
  }
}
