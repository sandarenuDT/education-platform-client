/**
 * Mirrors com.lms.backend.util.ApiPaths on the Spring Boot side.
 * Keep this in sync manually whenever ApiPaths.java changes — same idea as
 * the backend's own comment: one source of truth per side, so a path only
 * changes in two well-known places instead of scattered through components.
 *
 * These are relative to the backend's context-path ("/api" in application.yml),
 * which is already baked into NEXT_PUBLIC_API_BASE_URL — so paths here do NOT
 * repeat "/api".
 */

// Base segments
export const AUTH = "/auth";
export const PUBLIC = "/public";
export const STUDENT = "/student";
export const TEACHER_ADMIN = "/teacher-admin";
export const SUPER_ADMIN = "/super-admin";

// Public catalog sub-paths
export const PUBLIC_BOOKS = `${PUBLIC}/books`;
export const PUBLIC_RECORDINGS = `${PUBLIC}/recordings`;

// Super-admin sub-paths
export const SUPER_ADMIN_TEACHERS = `${SUPER_ADMIN}/teachers`;

// Teacher-admin sub-paths
export const TEACHER_ADMIN_BOOKS = `${TEACHER_ADMIN}/books`;
export const TEACHER_ADMIN_RECORDINGS = `${TEACHER_ADMIN}/recordings`;

// Student sub-paths
export const STUDENT_ORDERS = `${STUDENT}/orders`;
export const STUDENT_BOOKS = `${STUDENT}/books`;

/**
 * Auth sub-paths aren't in the Java file you shared (only the AUTH base is).
 * These four are my best-guess defaults — confirm the real ones with your
 * @RequestMapping / @PostMapping annotations in the auth controller and
 * I'll correct these.
 */
export const AUTH_LOGIN = `${AUTH}/login`;
export const AUTH_REGISTER = `${AUTH}/register`;
export const AUTH_REFRESH = `${AUTH}/refresh`;
export const AUTH_LOGOUT = `${AUTH}/logout`;
