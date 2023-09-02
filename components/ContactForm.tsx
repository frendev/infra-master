import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormError from './FormError';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import InputField from './InputField';
import { useRouter } from 'next/router';
import Modal from './Modal';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message?: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({ mode: 'onChange' });
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (formValues: ContactFormValues) => {
    const { firstName, lastName, email, phoneNumber, message } = formValues;

    return axios.post('/api/send-email', {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    });
  };

  const onSuccess = () => {
    setShowModal(true);
    setEmailSent(true);
  };
  const onError = () => {
    setShowModal(true);
    setEmailSent(false);
  };

  const { isLoading, mutate } = useMutation(sendEmail, {
    onSuccess,
    onError,
  });

  const onSubmit = async (data: any) => {
    mutate(data);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <div id="contact" className="w-max mx-auto my-5">
        <h1 className="relative text-center text-2xl md:text-3xl underline-effect mx-auto py-1">
          Contact Us
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 p-10 w-4/5 mx-auto relative rounded-lg shadow-[rgba(60,64,67,0.15)_0px_1px_2px_0px,_rgba(60,64,67,0.15)_0px_2px_6px_2px]">
        <div className="lg:col-span-2 lg:mx-10">
          <div className="w-fit mx-auto">
            <h1 className="relative underline-effect text-center text-2xl md:text-3xl py-1 mx-auto">
              Do you have any queries?
            </h1>
          </div>

          <br></br>
          <p className="text-center text-xl text-neutral-500">
            We would love to respond to your queries and help you succeed.
            <br />
            Feel Free to get in touch with us.
          </p>
          <div className="flex justify-center my-10 text-xl ">
            <ul className="space-y-10">
              <li className="flex flex-col items-center space-y-2">
                <AiOutlineMail size={30}></AiOutlineMail>
                <h1>Email</h1>
                <p>info@inframaster.co.in</p>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <AiOutlinePhone size={30}></AiOutlinePhone>
                <h1>Phone</h1>
                <p>+91 92722 22729</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="w-fit mx-auto">
            <h1 className="underline-effect relative text-2xl md:text-3xl mb-5 py-1 mx-auto text-center">
              Send Us A Message
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex md:justify-between md:space-x-4">
              <div className="w-full">
                <InputField
                  register={register}
                  label="First Name"
                  formField="firstName"
                  pattern={{
                    value: /^[A-Za-z]*$/,
                    message: 'Only Characters are allowed.',
                  }}
                  minLength={{
                    value: 1,
                    message: 'Minimum length is 1 Character.',
                  }}
                  maxLength={{
                    value: 50,
                    message: 'Maximum length is 50 Characters.',
                  }}
                />
                {errors && <FormError message={errors?.firstName?.message} />}
              </div>

              <div className="w-full">
                <InputField
                  register={register}
                  label="Last Name"
                  formField="lastName"
                  pattern={{
                    value: /^[A-Za-z]*$/,
                    message: 'Only Characters are allowed.',
                  }}
                  minLength={{
                    value: 1,
                    message: 'Minimum length is 1 Character.',
                  }}
                  maxLength={{
                    value: 50,
                    message: 'Maximum length is 50 Characters.',
                  }}
                />
                {errors ? (
                  <FormError message={errors?.lastName?.message} />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="mt-5">
              <InputField
                register={register}
                label="Phone Number"
                formField="phoneNumber"
                pattern={{
                  value: /^[0-9]*$/,
                  message: 'Only digits are allowed.',
                }}
                minLength={{
                  value: 10,
                  message: 'Minimum length is 10 digits.',
                }}
                maxLength={{
                  value: 10,
                  message: 'Maximum length is 10 digits.',
                }}
              />
              {errors && <FormError message={errors?.phoneNumber?.message} />}
            </div>

            <div className="mt-5">
              <InputField
                register={register}
                label="Email Address"
                formField="email"
                pattern={{
                  value: /^\S+@\S+$/i,
                  message: 'Email address is invalid',
                }}
              />
              {errors && <FormError message={errors?.email?.message} />}
            </div>

            <div className="mt-5">
              <label className="text-gray-600 font-semibold uppercase">
                Message
              </label>
              <textarea
                className="resize-none bg-gray-100 text-gray-900 mb-3 p-3 rounded-lg focus:outline-none focus:shadow-outline w-full"
                placeholder="Tell us more about your requirements...."
                rows={5}
                {...register('message')}
              />
            </div>

            {isLoading ? (
              <button
                type="button"
                className="cursor-not-allowed uppercase text-md font-bold tracking-wide bg-indigo-200 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline opacity-50"
              >
                Submit
              </button>
            ) : (
              <button
                type="submit"
                className="transition ease-in-out delay-100 uppercase text-md font-bold tracking-wide bg-slate-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:opacity-80"
              >
                Submit
              </button>
            )}
            <Modal
              emailSent={emailSent}
              showModal={showModal}
              closeModalHandler={closeModalHandler}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
