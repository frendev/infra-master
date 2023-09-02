import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import Link from 'next/link';
import { MdKeyboardBackspace } from 'react-icons/md';

import apolloClient from '../../config/apollo-client-config';
import { getAllBlogs, GET_POST_BY_SLUG } from '../../queries/blogs';

export const getStaticPaths = async () => {
  const res = await getAllBlogs();

  const paths = res.map((el: any) => {
    return {
      params: { slug: el.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const { data } = await apolloClient.query({
    query: GET_POST_BY_SLUG,
    variables: { slug: context.params.slug },
  });

  return {
    props: {
      blog: data.blogs.items[0],
      revalidate: 10,
    },
  };
};

function BlogDetails(props: any) {
  const { blog } = props;

  if (!blog) return <div>loading..</div>;

  return (
    <div className="space-y-5">
      <div className="flex justify-center">
        <p className="md:text-lg uppercase underline underline-offset-2 flex w-4/5">
          <span>
            <MdKeyboardBackspace size={25} />
          </span>
          <Link href="/blogs">Back To Blogs</Link>
        </p>
      </div>
      <div className="grid grid-cols-1 w-3/5 mx-auto space-y-5">
        <h1 className="text-2xl md:text-4xl">{blog.title}</h1>
        <p className="text-sm text-gray-500">
          {dayjs(blog.sys.publishedAt).format('DD MMMM YYYY [at] hh:mm A')}
        </p>
        <div className="relative">
          <Image
            src={blog.imageUrl.url}
            width="1200px"
            height="400px"
            alt={blog.title}
          />
        </div>
        <p className="body-text">
          {documentToReactComponents(blog.description.json)}
        </p>
      </div>
    </div>
  );
}

export default BlogDetails;
