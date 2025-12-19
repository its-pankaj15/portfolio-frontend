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
