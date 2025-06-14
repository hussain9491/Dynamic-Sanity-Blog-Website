import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { urlFor } from '@/sanity/lib/image';

type BlogType = {
  title: string;
  description: string;
  image: string | { asset: { url: string } } | StaticImport;
  slug?: { current: string };
};


const Blog = ({data}:{data:BlogType}) => {
  return (
    <div>
      <div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-auto w-auto  bg-gray-100  p-0 rounded">
<Image
  // src={getImageSrc(data.image)} 2nd method for image fetching
  src={urlFor(data.image).url()}
  alt="blog-image"
  width={500}
  height={100}
/>
          
           </div>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {data.title}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {data.title}
            </h1>
            <div className="mt-4">
  {data.description && (
    <p className="text-gray-700 text-lg">
      {data.description.split(" ").slice(0, 70).join(" ").replace(/^./, c => c.toUpperCase())}...
    </p>
  )}
</div>

            <div className="flex items-center flex-wrap ">
 
                {data.slug?.current && (
<Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={`/blog/${data.slug.current}`}>
  Read More
  <svg
    className="w-4 h-4 ml-2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
</Link>
)}
             
             
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>


  
  )
}

export default Blog
