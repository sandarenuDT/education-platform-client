import { NextRequest, NextResponse } from "next/server";
import type { Role } from "@/types";

// TODO: replace with real session/JWT reading once auth is wired up.
// For now this documents the intended guard so routes are already isolated by role.
//
// Frontend route  →  Backend role required  →  Backend API prefix it calls
//   /dashboard/*  →  STUDENT                →  /api/student/**
//   /teacher/*    →  TEACHER_ADMIN          →  /api/teacher-admin/**
//   /admin/*      →  SUPER_ADMIN            →  /api/super-admin/**

const roleForPath = (pathname: string): Role | null => {
  if (pathname.startsWith("/dashboard")) return "STUDENT";
  if (pathname.startsWith("/teacher")) return "TEACHER_ADMIN";
  if (pathname.startsWith("/admin")) return "SUPER_ADMIN";
  return null;
};

export function middleware(request: NextRequest) {
  const requiredRole = roleForPath(request.nextUrl.pathname);
  if (!requiredRole) return NextResponse.next();

  // const token = request.cookies.get("edex_token")?.value;
  // if (!token) return NextResponse.redirect(new URL("/login", request.url));
  // const claims = await verifyJwt(token); // e.g. via the "jose" library (Edge-compatible)
  // if (claims.role !== requiredRole) return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/teacher/:path*", "/admin/:path*"],
};
