import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Home: NextPage = () => {
  const MapNoSSR = dynamic(() => import('modules/map/MapNoSSR'), {
    ssr: false,
  });
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MapNoSSR />
    </div>
  );
};

export default Home;
