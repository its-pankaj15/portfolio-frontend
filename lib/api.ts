const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

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

export async function getBlogs() {
  return fetchJSON("/blogs");
}

export async function getTestimonials() {
  return fetchJSON("/testimonials");
}

export async function getExperience() {
  return fetchJSON("/experience");
}
