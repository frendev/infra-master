import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import apolloClient from '../config/apollo-client-config';
import { GET_ALL_COURSES } from '../queries/courses';
import { AiOutlineDown } from 'react-icons/ai';
import Head from 'next/head';

export const getStaticProps = async (context: any) => {
  const { data } = await apolloClient.query({
    query: GET_ALL_COURSES,
  });

  return {
    props: {
      courses: data.courses.items,
      revalidate: 10,
    },
  };
};

function Courses(props: any) {
  const router = useRouter();
  const { courses } = props;

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (JSON.stringify(router.query) === '{}') {
      router.push(
        `/courses?slug=${courses[0].slug}`,
        `/courses?slug=${courses[0].slug}`,
        {
          shallow: true,
        },
      );
    }
  }, [router.query]);

  const selectedCourse = courses.filter((el: any) => {
    return el.slug === router.query.slug;
  });

  const changeCourseHandler = (slug: string) => {
    router.push(`/courses?slug=${slug}`, `/courses?slug=${slug}`, {
      shallow: true,
    });

    if (showDropdown) {
      setShowDropdown((prev) => !prev);
    }
  };

  const dropdownHandler = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>Inframaster | Courses</title>
        <link rel="icon" href="/assets/favicon.ico?v=1.0" />
      </Head>
      <div className="grid grid-cols-4 w-4/5 mx-auto md:space-x-5 space-y-5 md:space-y-0">
        <div className="md:col-span-1 col-span-4">
          <h1 className="text-white mb-5 p-2 text-xl bg-slate-700">
            Our Courses
          </h1>
          <div className="md:hidden relative w-full bg-slate-200 text-black">
            <div className="flex justify-center items-center px-2">
              <button
                className="text-black focus:outline-none rounded-none text-lg py-1 text-left w-full"
                type="button"
                onClick={dropdownHandler}
              >
                Select a Course
              </button>
              <AiOutlineDown size={25} />
            </div>
            <div
              className={` ${
                showDropdown ? 'block' : 'hidden'
              } z-10 mt-1 absolute w-full`}
            >
              <div className="flex flex-col bg-white space-y-1">
                {courses.map((el: any, i: number) => {
                  return (
                    <div
                      key={el.slug}
                      className={`py-1 px-4 ${
                        router.query.slug === el.slug
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-200 text-black'
                      }`}
                      onClick={() => changeCourseHandler(el.slug)}
                    >
                      {el.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="space-y-5 hidden md:block">
            {courses.map((el: any) => {
              return (
                <>
                  <p
                    key={el.slug}
                    className={`flex flex-shrink-0  p-2 cursor-pointer transition duration-300 
                    ${
                      router.query.slug === el.slug
                        ? 'bg-slate-700 text-white'
                        : 'bg-slate-200 text-black'
                    }`}
                    onClick={() => changeCourseHandler(el.slug)}
                  >
                    {el.title}
                  </p>
                </>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-3 col-span-4">
          <h1 className="bg-slate-700 text-white mb-5 text-xl p-2">
            {selectedCourse[0]?.title}
          </h1>
          <div className="bg-white p-4">
            {documentToReactComponents(selectedCourse[0]?.description.json)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
