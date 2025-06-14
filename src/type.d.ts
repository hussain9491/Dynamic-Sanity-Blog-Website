type BlogType = {
  title: string,
  description: string,
  image: string | { asset: { url: string } } | StaticImport,
  slug: {current: string},
};

// we create a custom type for blog and data fetching in page.tsx