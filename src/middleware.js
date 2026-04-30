import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  const blogMatch = pathname.match(/^\/blog\/([^\/]+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const githubUrl = `https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/content/articles/${slug}.html`;
    
    const res = await fetch(githubUrl);
    if (res.ok) {
      const html = await res.text();
      return new NextResponse(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: "/blog/:slug*",
};