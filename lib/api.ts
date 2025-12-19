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
