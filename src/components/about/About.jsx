import Link from "next/link";
import Image from "next/image";

const About = ({ heading, message }) => {
  return (
    <section
      id="about"
      className={
        "md:pl-80 md:pr-28 w-full flex md:flex-row sm:flex-col-reverse mt-10 overflow-x-hidden md:py-8 flex-wrap justify-between items-center md:items-start"
      }
    >
      <article className={"md:w-[45%] pl-3 w-full"}>
        <div className={"items-center text-center md:text-left"}>
          <h1 className={"w-[85%] text-5xl font-bold text-ideas-blue-dark"}>
            Sobre Mi
          </h1>
          <h4
            className={
              "w-11/12 pt-12 text-ideas-gray-p font-medium text-[17px]"
            }
          >
            Me llamo Diana Atobe. Soy Desarrolladora Web Full Stack y estudiante
            de la carrera de Análisis de Sistemas Informáticos. Anteriormente
            estudiaba medicina en la Universidad de Buenos Aires pero me di
            cuenta de que no era para mi. Afortunadamente descubrí el mundo de
            la programación y descubrí una nueva pasión.
          </h4>
        </div>
      </article>
      <aside className={"hidden md:w-8/12 block md:flex -mr-40 mt-10 h-auto"}>
        <div className="z-10">
          <Image
            src="/dini.jpg"
            unoptimized={true}
            alt="foto personal"
            height={490}
            width={350}
            className="mt-12"
          />
        </div>
      </aside>
    </section>
  );
};

export default About;
