import Head from 'next/head'
import React,{useEffect,useState} from 'react'
import Remitly from '@/src/components/remitly';
import remitlyScrape from '@/src/features/remitly';

export default function Home(props) 
{
  return (
    <>
      <Head>
        <title>Exchange Rate Tracker</title>
        <meta name="description" content="Exchange Rate Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Remitly props={props}/>
    </>
  )
}

export async function getStaticProps ()
{
  const remitlyResult = await remitlyScrape()
  console.log(remitlyResult)

  return {
    props: {remitlyResult,}
  }
};