const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImageUrl?: string;
  tags?: string[];
  publishedAt?: string;
  status: "draft" | "published";
}

interface Experience {
  _id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate?: string | null;
  description?: string;
  order?: number;
}

interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  content: string;
  avatarUrl?: string;
  order?: number;
}

async function fetchJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  return res.json();
}

export async function getAbout() {
  return fetchJSON("/about");
}

export async function getSkills() {
  return fetchJSON("/skills");
}

export async function getProjects() {
  return fetchJSON("/projects");
}

export async function getBlogs(): Promise<Blog[]> {
  return fetchJSON<Blog[]>("/blogs");
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return fetchJSON<Testimonial[]>("/testimonials");
}

export async function getExperience(): Promise<Experience[]> {
  return fetchJSON<Experience[]>("/experience");
}
