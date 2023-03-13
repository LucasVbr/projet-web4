import Head from 'next/head';
import Navbar from '@/components/Navbar';
import {Box, Image} from '@chakra-ui/react';
import HomeHero from '@/components/layout/Home/HomeHero';

export default function Home() {
  return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Navbar/>
        <HomeHero/>

        <Box minH={'100vh'}>
        </Box>
      </>
  );
}
