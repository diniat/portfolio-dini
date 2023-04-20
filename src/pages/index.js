import Head from "next/head";
import Hero from "@/components/Hero";
import Slider from "@/components/slider/Slider";
import Contact from "@/components/contact/Contact";
import About from "@/components/about/About";

export default function Home({ SliderData }) {
  return (
    <div>
      <Head>
        <title>DianAtobe Dev</title>
        <meta name="Professional Portfolio" content="Diana Atobe Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Slider slides={SliderData} />
      <About />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const SliderData = [
    {
      index: 1,
      headerTitle: "Proyecto Academico",
      subHeader: "Paises",
      description:
        "Proyecto Academico realizado en el bootcamp SoyHenry. Es una pagina web sobre paises",
    },
    {
      index: 2,
      headerTitle: "Proyecto Academico Grupal",
      subHeader: "VerdeVolver",
      description:
        "Proyecto Academico realizado en el bootcamp SoyHenry. Es una pagina web sobre ecologia",
    },
    {
      index: 3,
      headerTitle: "Proyecto Personal Front End",
      subHeader: "HooBank",
      description: "...",
    },
    {
      index: 4,
      headerTitle: "...",
      subHeader: ".5.",
      description: "...",
    },
    {
      index: 5,
      headerTitle: "...",
      subHeader: "..",
      description: "...",
    },
  ];

  return {
    props: {
      SliderData,
    },
  };
}
