const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getAllPosts = async () => {
  await delay(5000);
  return new Array(10).fill(0).map((_, i) => ({
    id: i,
    slug: `post-${i}`,
    title: `Post ${i}`,
    content: `Post ${i} content`,
  }));
};
