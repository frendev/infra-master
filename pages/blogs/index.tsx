import React, { useState } from 'react';
import BlogCard from '../../components/BlogCard';
import { getAllBlogs } from '../../queries/blogs';
import Head from 'next/head';
import { Block, Inline } from '@contentful/rich-text-types';

//blogs list

type BlogsListProps = {
  blogsList: {
    imageUrl: {
      title: string;
      url: string;
    };
    description: {
      json: Block | Inline;
    };
    title: string;
    slug: string;
    sys: {
      id: string;
      publishedAt: string;
    };
  }[];
};

//individual blog
type Blog = {
  imageUrl: {
    title: string;
    url: string;
  };
  description: {
    json: Block | Inline;
  };
  title: string;
  slug: string;
  sys: {
    id: string;
    publishedAt: string;
  };
};

export async function getStaticProps() {
  const res = await getAllBlogs();

  return {
    props: {
      blogsList: res,
      revalidate: 10,
    },
  };
}

function Blogs(props: BlogsListProps) {
  const { blogsList } = props;
  const [searchBlogByTitle, setSearchBlogByTitle] = useState('');

  const searchHandler = (e: any) => {
    setSearchBlogByTitle(e.target.value);
  };

  const filteredBlogsList = blogsList.filter((blog: Blog) => {
    return blog.title.toLowerCase().includes(searchBlogByTitle.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>Perfects| Blogs</title>
        <link rel="icon" href='assets/' />
      </Head>
      <div>
        <div className="w-3/5 mx-auto space-y-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            Recent Blogs By PerfectSAP
          </h1>
          <div className="space-y-2">
            <label className="text-gray-600 font-semibold">
              Search Blog By Title
            </label>
            <input
              onChange={(e) => searchHandler(e)}
              className="p-3 rounded-lg w-full outline-none input-field"
              placeholder="Type Something...."
            />
          </div>

          {filteredBlogsList.length > 0 ? (
            <div className="space-y-5">
              {filteredBlogsList.map((el: Blog) => {
                return <BlogCard key={el.sys.id} blog={el} />;
              })}
            </div>
          ) : (
            <div>
              <h1 className="text-xl">No results found....</h1>
            </div>
          )}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default Blogs;
