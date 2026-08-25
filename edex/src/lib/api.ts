/**
 * Client for the EDEX Spring Boot backend.
 * Set NEXT_PUBLIC_API_BASE_URL in .env.local, e.g.
 *   NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
 */
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080/api";

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

interface RequestOptions extends RequestInit {
  /** Attach the current session's JWT/bearer token, if you're storing one client-side. */
  token?: string;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { token, headers, ...rest } = options;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    // Spring Session/JWT cookie support if you're using cookie-based auth instead:
    credentials: "include",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new ApiError(res.status, body || res.statusText);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string, options?: RequestOptions) =>
    request<T>(path, { ...options, method: "GET" }),

  post: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>(path, {
      ...options,
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    }),

  put: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>(path, {
      ...options,
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    }),

  delete: <T>(path: string, options?: RequestOptions) =>
    request<T>(path, { ...options, method: "DELETE" }),
};

/**
 * Endpoint map — see src/lib/apiPaths.ts for path constants that mirror
 * com.lms.backend.util.ApiPaths exactly (source of truth on the backend).
 *
 *   auth:            AUTH_LOGIN, AUTH_REGISTER, AUTH_REFRESH, AUTH_LOGOUT (paths unconfirmed — see apiPaths.ts)
 *   public catalog:  GET PUBLIC_BOOKS, GET PUBLIC_RECORDINGS
 *   student:         GET/POST STUDENT_ORDERS, GET STUDENT_BOOKS
 *   teacher-admin:   GET/POST/PUT/DELETE TEACHER_ADMIN_BOOKS, TEACHER_ADMIN_RECORDINGS
 *   super-admin:     GET/POST SUPER_ADMIN_TEACHERS
 */
