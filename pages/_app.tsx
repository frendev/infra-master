import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import SEO from '@bradgarropy/next-seo';
import Layout from '../components/Layout';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        <SEO
          title="Inframaster"
          description="Building Infrastructure Leaders"
          keywords={[
            'sap',
            'sap abap',
            'sap hana',
            'perectsap',
            'erp',
            'resource management',
            'data processing',
            'sap courses',
            'best sap training',
            'business intelligence',
          ]}
          facebook={{
            image: 'public\\assets\\logo.png',
            url: 'http://www.perfectsap.com',
            type: 'website',
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
