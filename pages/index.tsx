import type { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inframaster | Home</title>
        <link rel="icon" href="/assets/favicon.ico?v=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <div className="space-y-10">
        <Hero />
        <About />
        {/* <Services />? */}
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
