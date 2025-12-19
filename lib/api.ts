export async function getBlogs() {
  return fetchJSON<
    {
      _id: string;
      title: string;
      slug: string;
      excerpt?: string;
      coverImageUrl?: string;
      tags?: string[];
      publishedAt?: string;
      status: "draft" | "published";
    }[]
  >("/blogs");
}

// Add these to your existing lib/api.ts

export async function getTestimonials() {
  return fetchJSON<
    {
      _id: string;
      name: string;
      role?: string;
      company?: string;
      content: string;
      avatarUrl?: string;
      order?: number;
    }[]
  >("/testimonials");
}

export async function getExperience() {
  return fetchJSON<
    {
      _id: string;
      company: string;
      role: string;
      location?: string;
      startDate: string;
      endDate?: string | null;
      description?: string;
      order?: number;
    }[]
  >("/experience");
}

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
  return fetchJSON<{ headline: string; bio: string; avatarUrl?: string; location?: string; socials?: Record<string, string> }>("/about");
}

export async function getSkills() {
  return fetchJSON<{ _id: string; name: string; level?: string; category?: string; order?: number }[]>("/skills");
}

export async function getProjects() {
  return fetchJSON<{ _id: string; title: string; slug: string; description: string; techStack?: string[]; liveUrl?: string; repoUrl?: string; thumbnailUrl?: string; featured?: boolean }[]>("/projects");
}

export async function getBlogs() {
  return fetchJSON<{ _id: string; title: string; slug: string; excerpt?: string; coverImageUrl?: string; tags?: string[]; publishedAt?: string; status: "draft" | "published" }[]>("/blogs");
}

export async function getTestimonials() {
  return fetchJSON<{ _id: string; name: string; role?: string; company?: string; content: string; avatarUrl?: string; order?: number }[]>("/testimonials");
}

export async function getExperience() {
  return fetchJSON<{ _id: string; company: string; role: string; location?: string; startDate: string; endDate?: string | null; description?: string; order?: number }[]>("/experience");
}
