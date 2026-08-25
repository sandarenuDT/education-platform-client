export type Role = "SUPER_ADMIN" | "TEACHER_ADMIN" | "STUDENT";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

export interface Book {
  id: string;
  title: string;
  subject: string;
  grade?: string;
  price: number | "free";
  coverUrl?: string;
  description?: string;
}

export interface Recording {
  id: string;
  title: string;
  subject: string;
  grade?: string;
  price: number | "free";
  thumbnailUrl?: string;
  description?: string;
  durationMinutes?: number;
  lessonsCount?: number;
}

export interface Purchase {
  id: string;
  studentId: string;
  itemType: "book" | "recording";
  itemId: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  purchasedAt: string;
}
