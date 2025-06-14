  *[_type == "blog"] | order(_updateAt asc){
    title, description, image, slug
  }
  data fetch query in sanity 
  const Page = async() => {
  const query =  ` *[_type == "blog"] | order(_updateAt asc){
    title, description, image, slug
  }`
  const datas = await client.fetch(query)
  console.log(datas)
  }
  data fething in page.tsx