
// import React from 'react';
// import { client } from '@/sanity/lib/client';
// import Blog from './component/Blog';

// type BlogType = {
//   title: string;
//   description: string;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   slug: {
//     current: string;
//   };
// };

// const Page = async () => {
//   const query = `*[_type == "blogs"] | order(_updatedAt asc) {
//     title,
//     description,
//     image {
//       asset-> {
//         url
//       }
//     },
//     slug
//   }`;
//   const data: BlogType[] = await client.fetch(query);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {data.map((item: BlogType) => (
//           item.slug?.current && (
//             <div
//               key={item.slug.current}
//               className="bg-white shadow-3xl rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
//             >
//               <div className="relative w-full h-48">
//                 {item.image?.asset?.url ? (
//                   <img
//                     src={item.image.asset.url}
//                     alt={item.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                     No Image
//                   </div>
//                 )}
//               </div>
//               <div className="p-4 flex-grow">
//                 <h3 className="text-lg font-semibold line-clamp-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm line-clamp-3 mt-2">
//                   {item.description}
//                 </p>
//               </div>
//               <div className="p-4 pt-0">
//                 <a
//                   href={`/blog/${item.slug.current}`}
//                   className="text-blue-500 hover:text-blue-700 text-sm font-medium"
//                 >
//                   Read More →
//                 </a>
//               </div>
//             </div>
//           )
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;

import React from 'react';
import { client } from '@/sanity/lib/client';

type BlogType = {
  title: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
};

const Page = async () => {
  const query = `*[_type == "blogs"] | order(_updatedAt asc) {
    title,
    description,
    image {
      asset-> {
        url
      }
    },
    slug
  }`;
  const data: BlogType[] = await client.fetch(query);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item: BlogType) => (
          item.slug?.current && (
            <div
              key={item.slug.current}
              className="bg-white shadow-3xl rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative w-full h-48">
                {item.image?.asset?.url ? (
                  <img
                    src={item.image.asset.url}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 mt-2">
                  {item.description}
                </p>
              </div>
              <div className="p-4 pt-0">
                <a
                  href={`/blog/${item.slug.current}`}
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Page;