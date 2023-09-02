import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowForward } from 'react-icons/md';
import Image from 'next/image';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Block, Inline } from '@contentful/rich-text-types';

type BlogCardProps = {
  blog: {
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
      publishedAt: string;
    };
  };
};

function BlogCard(props: BlogCardProps) {
  const { blog } = props;
  return (
    // outline div of the card
    <div className="grid grid-cols-1 lg:grid-cols-4 bg-white mx-auto shadow-[rgba(60,64,67,0.15)_0px_1px_2px_0px,_rgba(60,64,67,0.15)_0px_2px_6px_2px]">
      {/* image div starts */}
      <div className="w-full h-[200px] lg:h-full lg:col-span-1 relative">
        <Image src={blog.imageUrl.url} layout="fill" alt={blog.title} />
      </div>
      {/* image div starts */}

      {/* this is an outer div enclosing title, desc, date, continue reading */}
      <div className="space-y-10 p-4 lg:col-span-3">
        {/* title and description div starts*/}
        <div className="space-y-2">
          <h1 className="text-black font-bold text-xl">{blog.title}</h1>
          <p className="body-text text-base truncate">
            {documentToPlainTextString(blog.description.json)}
          </p>
          <p className="flex underline underline-offset-2 flex-shrink-0 md:hidden">
            <Link href={`/blogs/${blog.slug}`}>Continue Reading</Link>
            <span>
              <MdOutlineArrowForward size={25} />
            </span>
          </p>
        </div>
        {/* title and description div ends*/}

        {/* date and continue reading div starts*/}
        <div className="flex justify-between gap-x-8">
          <p className="text-sm text-gray-500">
            {dayjs(blog.sys.publishedAt).format('DD MMMM YYYY [at] hh:mm A')}
          </p>
          <p className="underline underline-offset-2 hidden md:flex">
            <Link href={`/blogs/${blog.slug}`}>Continue Reading</Link>
            <span>
              <MdOutlineArrowForward size={25} />
            </span>
          </p>
        </div>
      </div>
      {/* date and continue reading div ends*/}
    </div>
  );
}

export default BlogCard;
