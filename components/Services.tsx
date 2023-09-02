import React from 'react';
import Card from './Card';
import teaching from '../public/assets/teaching.png';
import b2b from '../public/assets/b2b.png';
import coding from '../public/assets/coding.png';
import staff from '../public/assets/staff.png';

function Services() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="w-max mx-auto">
        <h1 className="relative text-center text-2xl md:text-3xl mb-5 py-1 underline-effect mx-auto ">
          What We Do?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-x-10 gap-y-10">
        <div className="grid">
          <Card img={b2b} alt="B2B Business Model">
            <h1 className="text-center text-xl">B2B Model</h1>
            <p className="p-5 body-text text-left">
              Where we understand the company goal and help them revolutionize
              their workforce by making them equipped with relevant knowledge
              required for effective project delivery.
            </p>
          </Card>
        </div>
        <div className="grid">
          <Card img={teaching} alt="B2C Business Model">
            <h1 className="text-center text-xl">B2C Model</h1>
            <p className="p-5 body-text">
              Every individual student has a different career journey.
              PerfectSAP has been a faithful companion that one can rely on for
              all the educational resources that would make their journey easier
              and make their goals achievable.
            </p>
          </Card>
        </div>
        <div className="grid">
          <Card img={coding} alt="software,coding">
            <h1 className="text-center text-xl">Software Solutions</h1>
            <p className="p-5 body-text text-left">
              Automation of the work process is no longer optional. Software
              support has become an indispensible requirement across industries.
              Having a reliable software partner can go a long way. PerfectSAP's
              software center is just that providing custom software solution.
            </p>
          </Card>
        </div>
        <div className="grid">
          <Card img={staff} alt="staffing solution">
            <h1 className="text-center text-xl">Staffing Solutions</h1>
            <p className="p-5 body-text text-left">
              Where workforce is believed to be pillar for any organization
              sourcing right manpower and managing it is another ball game. We
              share this responsibility via our staffing solutions. Finding a
              perfect fit for your organization on your terms had never been
              easier.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Services;
