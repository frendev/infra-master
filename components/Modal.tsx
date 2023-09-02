import Image from 'next/image';
import React from 'react';
import error from '../public/assets/error.png';
import success from '../public/assets/success.png';

type ModalProps = {
  emailSent: boolean;
  showModal: boolean;
  closeModalHandler: () => void;
};

function Modal(props: ModalProps) {
  let { showModal, closeModalHandler, emailSent } = props;

  const okayHandler = (e: any) => {
    e.stopPropagation();
    closeModalHandler();
  };

  return (
    <div
      onClick={closeModalHandler}
      className={
        showModal
          ? 'text-xl top-0 left-0 bottom-0 right-0 fixed px-4 flex items-center justify-center z-50 transition ease-in-out duration-300 0translate-y-full'
          : 'text-xl top-0 left-0 bottom-0 right-0 fixed px-4 flex items-center justify-center z-50 transition duration-300 -translate-y-full'
      }
    >
      <div>
        <div className="text-xl top-0 left-0 bottom-0 right-0 fixed px-4 flex items-center justify-center">
          <div className="bg-black opacity-75 w-full h-full absolute inset-0"></div>

          <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 z-50">
            {!emailSent ? (
              <div className="flex flex-col items-center space-y-5">
                <Image src={error} width="100" height="100" />
                <div className="mt-4 md:mt-0 md:ml-6 text-center">
                  <p className="font-bold">Something Went Wrong!</p>
                  <p className="text-gray-700 mt-1">
                    Sorry, the email could not be sent! Please try again later.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-5">
                <Image src={success} width="100" height="100" />
                <div className="mt-4 md:mt-0 md:ml-6 text-center">
                  <p className="font-bold">Thank You!</p>
                  <p className="text-gray-700 mt-1">
                    We got your mail! We will get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>
            )}
            <div className="text-center flex justify-center mt-4">
              <button
                type="button"
                onClick={(e) => okayHandler(e)}
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-lg mt-4
          md:mt-0 md:order-1"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
