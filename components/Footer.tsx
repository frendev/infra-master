import React from 'react';

function Footer() {
  return (
    <>
      <div className="clear-both flex flex-col items-center space-y-2 md:justify-around md:flex-row py-4 bg-slate-600 md:text-lg text-md text-yellow-300 mt-10">
        <div>
          <a target="_blank" href="https://www.freepik.com/">
            Images by FreePik
          </a>
        </div>
        <div className="text-center">Copyright ©2023 | All Rights Reserved</div>
      </div>
    </>
  );
}

export default Footer;
