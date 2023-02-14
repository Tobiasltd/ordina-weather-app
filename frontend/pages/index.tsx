import Head from "next/head";
import Home from "@/components/home/home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Weather App for Ordina" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
