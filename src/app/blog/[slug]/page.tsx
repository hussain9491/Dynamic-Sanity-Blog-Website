
//         {/* <footer className="mt-12 pt-8 border-t border-gray-200">
//           <div className="flex items-center justify-between">
//             <div className="flex space-x-4">
//               <span className="text-sm text-gray-500">Published on {new Date().toLocaleDateString()}</span>
//             </div>
//           </div>
//         </footer> */}

import React from 'react';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
// import router from 'next/router';

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const query = `*[_type == "blogs" && slug.current == '${params.slug}'][0]{
    title,
    description,
    image{
      asset->{
        url
      }
    }, 
    block
  }`;

  const blog = await client.fetch(query);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-img:rounded-xl prose-img:shadow-lg">
        <header className="mb-12 text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            {blog.title}
          </h1>
          {blog.image?.asset?.url && (
            <div className="mt-6 aspect-w-16 aspect-h-9">
              <img 
                src={blog.image.asset.url} 
                alt={blog.title} 
                className="w-[70%] h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          )}
        </header>

        <div className="mt-8 font-serif text-lg leading-8 text-gray-700 space-y-6">
          {blog.block && (
            <PortableText value={blog.block} />
            
          )}
        </div>
      </article>
      <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={`/`}>
Back to Home page
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
    </div>
  );
}
