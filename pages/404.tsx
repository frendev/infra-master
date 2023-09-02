import Link from 'next/dist/client/link';
import Image from 'next/image';
import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import notfound from '../public/assets/notfound.svg';

function NotFound() {
  return (
    <div className="text-black flex justify-between w-4/5 mx-auto flex-col md:flex-row">
      <Image src={notfound} width="900px" height="700px" />
      <div className="flex justify-center items-start flex-col space-y-5">
        <h1 className="text-xl md:text-2xl">
          Sorry, this page Could not be found...
        </h1>
        <p>
          The page you are looking for might be removed or is temporary
          unavailable.
        </p>
        <div className="sm:mx-auto md:mx-0">
          <button className="bg-blue-500 text-xl p-2 rounded text-white">
            <Link href="/" className="text-sm font-medium">
              Back To Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
