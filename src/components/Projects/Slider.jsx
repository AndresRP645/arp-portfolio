import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #c073ffef;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`

let data = [
  {
      img : "/projects/asesor.jpg",
      title: "Asesor",
      disc : "Se dan asesorías y regularizaciones a alumnos de la carrera de sistemas que tengan problemas para entender las clases de programación o a alumnos que tengan algún problema de aprendizaje."
  },
  {
      img : "/projects/salud-mental.jpg",
      title: "Artículo",
      disc : "Impacto de la Cuarentena de Covid-19 en la Salud Mental y Posible Causa de Depresión en las Personas."
  },
  {
      img : "/projects/space-invaders.jpg",
      title: "Space Invaders",
      disc : "El jugador controla un cañón su objetivo es destruir filas de extraterrestres invasores que van acercándose a la tierra cada vez más rápidamente a medida que el jugador va destruyendo a los enemigos."
  },
  {
      img : "/projects/bomberman.jpg",
      title: "Bomberman 3D",
      disc : "El juego pertenece al género de estrategia y laberintos, cuyo objetivo es matar a todos los enemigos que se presentan por nivel con bombas."
  },
  {
      img : "/projects/portfolio.jpg",
      title: "Portafolio Web",
      disc : "Portafolio WebApp creado con React.",
      link: "https://github.com/AndresRP645/arp-portfolio"
  },
  {
      img : "/projects/apreciacion.jpg",
      title: "Instrumento de apreciación docente",
      disc : "Sistema de encuestas a alumos sobre la forma de enseñanza del profesor y sobre el aprendizaje que han adquirido por las clases en el cual se busca la Correlación Estadística entre estos datos y saber si el profesor es un buen docente.",
      link: "https://github.com/AndresRP645/impacto-academico"
  },
  {
      img : "/projects/linksapp.png",
      title: "Node.js MySQL Links",
      disc : "CRUD Web App con autenticación, Utiliando Node.js, Mysql y otros Frameworks de Javascript.",
      link:"https://github.com/AndresRP645/nodejs-mysql-links"
  },
  {
      img : "/projects/mernNotes.png",
      title: "Notes App",
      disc : "Aplicación para guardar notas utilizando stack MERN(Mongo, Express, React, Node.js).",
      link: "https://github.com/AndresRP645/MERN-NotesApp"
  }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows : false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode : false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode : false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode : false
      }
    }
  ]
};