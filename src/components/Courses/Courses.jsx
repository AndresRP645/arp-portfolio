import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import CourseSlider from "./CourseSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";

const Courses = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = courses.map((item, i) => <CourseSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <span className="purple">Cursos y</span>
        <h1>Certificaciones</h1>
      </Slide>
      <Course>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Course>
    </Container>
  );
};

export default Courses;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 2rem;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
    padding: 2rem; 
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #c073ffef;
    color: #c073ffef;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Course = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #c073ffef;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

let courses = [
  {
    type: "Certificación",
    company: "Microsoft",
    page: "/files/ARP-Azure-AZ-900.pdf",
    icon: "/certifications/az900.png",
    disc: "Azure Fundamentals AZ-900",
  },
  {
    type: "Certificación",
    company: "Towa Software",
    page: "/files/ARP-EngineerWarriorTraining.pdf",
    icon: "/certifications/towa.png",
    disc: "Engineer Warrior Training - Hard Challenge (C# and Java)",
  },
  {
    type: "Curso",
    company: "Towa Software",
    icon: "/certifications/towa.png",
    disc: "Training Cobol",
  },
  {
    type: "Curso",
    company: "Cisco",
    icon: "/certifications/cisco.png",
    disc: "Introduction to Cybersecurity",
  },
  {
    type: "Curso",
    company: "Youtube",
    page: "https://www.youtube.com/watch?v=i3OdKwuBjeM&t=31s",
    channel: "Fazt",
    icon: "/certifications/youtube.png",
    disc: "Nodejs Curso Práctico desde Cero (Javascript en el Backend)",
  },
  {
    type: "Curso",
    company: "Youtube",
    page: "https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=56s",
    channel: "Fazt",
    icon: "/certifications/youtube.png",
    disc: "Express Framework de Nodejs, Curso para principiantes (Javascript en el backend)",
  },
  {
    type: "Curso",
    company: "Youtube",
    page: "https://www.youtube.com/playlist?list=PLL0TiOXBeDai6x37_wQwWX6_qNZUM4FBm",
    channel: "Fazt",
    icon: "/certifications/youtube.png",
    disc: "React.js | Curso Práctico Completo Desde Cero, Para Principiantes",
  },
  {
    type: "Curso",
    company: "Youtube",
    page: "https://www.youtube.com/watch?v=Tn6QYliFBcs",
    channel: "Fazt Code",
    icon: "/certifications/youtube.png",
    disc: "Nextjs Curso Práctico | Framework de SSR basado en React",
  },
  {
    type: "Curso",
    company: "Youtube",
    page: "https://www.youtube.com/watch?v=QCw0L6FupQ0",
    channel: "freeCodeCamp Español",
    icon: "/certifications/youtube.png",
    disc: "Aprende Bootstrap 5 - Curso de Bootstrap desde Cero",
  },
  {
    type: "Curso",
    company: "Youtube",
    page: "https://www.youtube.com/watch?v=VdGzPZ31ts8&t=397s",
    channel: "HolaMundo",
    icon: "/certifications/youtube.png",
    disc: "Aprende GIT ahora! curso completo GRATIS desde cero",
  },
  {
    type: "Curso",
    company: "Youtube",
    page: "https://www.youtube.com/playlist?list=PLVzwufPir355nStjiLrg1WKBNyV-zdLzx",
    channel: "Programación Fácil",
    icon: "/certifications/youtube.png",
    disc: "Curso COBOL (COMPLETO)",
  },
  {
    type: "Curso",
    company: "Youtube",
    page: "https://www.youtube.com/playlist?list=PLVzwufPir355nStjiLrg1WKBNyV-zdLzx",
    channel: "Universo Mainframe",
    icon: "/certifications/youtube.png",
    disc: "CURSO COBOL, CICS, DB2",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/instalacion-de-una-base-de-datos-mysql-paso-a-paso/",
    channel: "Pedro Pascual Maldonado Robles",
    icon: "/certifications/udemy.png",
    disc: "Instalación de una base de datos paso a paso",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/aprende-php-desde-cero/",
    channel: "Juan Fernando Urrego",
    icon: "/certifications/udemy.png",
    disc: "Aprende PHP desde cero",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/curso-de-php-v/",
    channel: "Limbergh Armando Morales Arellano",
    icon: "/certifications/udemy.png",
    disc: "Curso de PHP",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/aprende-php-funcdamentos-desde-0-a-100/",
    channel: "Luis orlando muñoz bueno",
    icon: "/certifications/udemy.png",
    disc: "aprende php fundamentos desde 0 a 100",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/reportes-pdf-con-php/",
    channel: "Jairo Galeas",
    icon: "/certifications/udemy.png",
    disc: "CREAR Documentos PDF directamente desde PHP",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/learn-to-program-in-c-through-simple-game-designe/",
    channel: "Kyle Fillingim",
    icon: "/certifications/udemy.png",
    disc: "Learn To Program in C# through simple Game Designe",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/vscode-mejora-tu-velocidad-para-codificar/",
    channel: "Fernando Herrera",
    icon: "/certifications/udemy.png",
    disc: "Visual Studio Code: Mejora tu velocidad para codificar",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/aprende-a-crear-videojuegos-y-apps-moviles-con-unity3d-c/",
    channel: "Marcos Vidal Fernández Heras",
    icon: "/certifications/udemy.png",
    disc: "Videojuegos y apps con Unity. Con ejemplos y ejercicios.",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/programacion-orientada-a-objetos-con-c/",
    channel: "Holman Isidro Gonzalez Ortegon",
    icon: "/certifications/udemy.png",
    disc: "Programación Orientada a Objetos con C#",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/lo-basico-de-csharp/",
    channel: "Nacho Cabanes",
    icon: "/certifications/udemy.png",
    disc: "Lo básico de C#",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/curso-de-c-sharp-net-core-desde-cero/",
    channel: "Alex Joel Pagoada Suazo",
    icon: "/certifications/udemy.png",
    disc: "Curso de C# .NET desde cero hasta lo mas avanzado full stack",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/curso-de-python-310-aprende-desde-cero-a-pro-2022-parte-1/",
    channel: "Marco Mendoza +80.000 Estudiantes",
    icon: "/certifications/udemy.png",
    disc: "Curso de Python 3.11: Aprende Desde Cero a Pro 2023",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/aprende-html5-y-css3-desde-cero/",
    channel: "Juan Fernando Urrego",
    icon: "/certifications/udemy.png",
    disc: "Aprende HTML5 y CSS3 desde cero",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/crea-una-pokedex-con-reactjs-y-typescript/",
    channel: "Manuel Sánchez",
    icon: "/certifications/udemy.png",
    disc: "Crea una Pokédex con React.js y TypeScript",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/crud-productos-stack-mean/",
    channel: "Tomas Ruiz Diaz",
    icon: "/certifications/udemy.png",
    disc: "CRUD Angular - Node - MEAN",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/curso-basico-de-typescript-empieza-con-este-lenguaje/",
    channel: "Víctor Robles",
    icon: "/certifications/udemy.png",
    disc: "Curso básico de TypeScript - Empieza con este lenguaje",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/fundamentos-de-angular/",
    channel: "Enrique Oriol",
    icon: "/certifications/udemy.png",
    disc: "Fundamentos de Angular",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/html-hacia-angular/",
    channel: "Fernando Herrera",
    icon: "/certifications/udemy.png",
    disc: "Angular: Convierte cualquier template HTML en una WebAPP",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/react-js-para-principiantes-desde-cero-curso-gratuito/",
    channel: "Rafa Tárrega",
    icon: "/certifications/udemy.png",
    disc: "React JS Desde Cero | Curso Gratuito | 2023",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/vue-3-js-iniciate-en-este-framework/",
    channel: "Agustin Navarro Galdon",
    icon: "/certifications/udemy.png",
    disc: "Vue 3 JS: Iníciate en este Framework",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/react-js-inicia-en-el-mundo-de-los-frameworks-de-javascript/",
    channel: "Agustin Navarro Galdon",
    icon: "/certifications/udemy.png",
    disc: "React JS: La biblioteca de JS creada por Facebook",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/android-studio-instalacion-emuladores-git-plugins-y-tips/",
    channel: "Alain Nicolás Tello",
    icon: "/certifications/udemy.png",
    disc: "Android Studio, Instalación, Emuladores, Git, Plugins y Tips",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/spring-boot-recetas-para-el-trabajo-diario-introduccion/",
    channel: "Juan José Orjuela Castillo",
    icon: "/certifications/udemy.png",
    disc: "Spring Boot: Recetas para el trabajo diario (Introducción)",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/fundamentos-de-android-para-crear-apps-de-calidad/",
    channel: "Alain Nicolás Tello",
    icon: "/certifications/udemy.png",
    disc: "Android: Fundamentos para crear tus primeras apps de calidad",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/java-latest-programming-from-zero-java13-java12-java11-java10-java9-j8/",
    channel: "Syed Ahmed",
    icon: "/certifications/udemy.png",
    disc: "Java Programming, Lambda and more (Java 13, 12, 11, 10, 9,8)",
  },
  {
    type: "Curso",
    company: "Udemy",
    page: "https://www.udemy.com/course/programacion-todosloslenguajes/",
    channel: "Jorge Salgado Miranda",
    icon: "/certifications/udemy.png",
    disc: "Introducción a la Programación en Varios Lenguajes",
  }
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
