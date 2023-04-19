import React from "react";
import styled from "styled-components";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMailBulk,
} from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hola <span className="purple">soy</span>
          </h4>
          <h1 className="purple">Andrés Rosales Paredes</h1>
          <h3>Web developer y Game developer en proceso</h3>
          <p>
            Soy apasionado del mundo de la tecnología y el diseño del mismo,
            autodidacta y amante del aprendizaje.
            <br />
            Me encanta el trabajo en equipo y ayudar a los demás, ya que siempre
            he sido de la idea que el conocimiento si no se transmite no sirve
            de nada.
            <br />
            Mi meta es ser FullStack Developer y Game Developer.
            <br />
            Siempre hay cosas nuevas que aprender, nunca es tarde para comenzar
            un nuevo proyecto o aprendizaje.
          </p>
          <br />
          <a className="cv" href="/files/ARP-CV.pdf" target="_blank">
            Descargar CV
          </a>
          <Social>
            <p>Contacto</p>
            <div className="social-icons">
              <span>
                <a href="https://www.facebook.com/AlexRosewall">
                  <FaFacebookF />
                </a>
              </span>

              <span>
                <a href="https://www.instagram.com/alex_rosewall/">
                  <FaInstagram />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/alex_rosewall">
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/andru00e9s-rosales-paredes-a200b021b/">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="mailto:andresrp645@gmail.com">
                  <FaMailBulk />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src="/profile.png" alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }

  .cv {
    font-size: 17px;
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    background: #2c00ff;
    color: white;
    border-radius: 4px;
  }

  .cv:hover {
    background: rgb(44, 0, 255);
    background: linear-gradient(
      90deg,
      rgba(44, 0, 255, 1) 10%,
      rgba(140, 0, 255, 1) 90%
    );
  }

  .cv:active {
    transform: translate(0em, 0.2em);
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #8c00ffef;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(-10deg) translateY(-5px);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 5px 5px #b862ffef);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
