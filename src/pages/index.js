import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DianAtobe Dev</title>
        <meta name="Professional Portfolio" content="Diana Atobe Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
