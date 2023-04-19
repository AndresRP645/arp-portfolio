import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaTelegram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import swal from 'sweetalert';

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert(error));
  };
  
  document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Andrés Rosales</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Ciudad:</h1>
          </Slide>
          <Slide direction="left">
            <p>Chimalhuacán, Estado de México. C.P. 56353</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Contacta directamente conmigo:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+525581807893">+52 55 81807893</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:andresrp645@gmail.com">andresrp645@gmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Redes Sociales</h1>
          </Slide>
          <div className="icons">
            
            <Zoom>
            <span>
                <a href="https://www.facebook.com/AlexRosewall">
                  <FaFacebookF />
                </a>
              </span>
            </Zoom>
            <Zoom>
            <span>
                <a href="https://twitter.com/alex_rosewall">
                  <FaTwitter />
                </a>
              </span>
            </Zoom>
            <Zoom>
            <span>
                <a href="https://www.instagram.com/alex_rosewall/">
                  <FaInstagram />
                </a>
              </span>
            </Zoom>
            <Zoom>
            <span>
                <a href="http://wa.me/525581807893/">
                  <FaWhatsapp />
                </a>
              </span>
            </Zoom>
            <Zoom>
            <span>
                <a href="https://t.me/Alex_Rosewall">
                  <FaTelegram />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://github.com/AndresRP645">
                  <FaGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
            <span>
                <a href="https://www.linkedin.com/in/andru00e9s-rosales-paredes-a200b021b/">
                  <FaLinkedinIn />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Form>
        <Slide direction="right">
          <form name="contact" method="POST" data-netlify="true">
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" name="Nombre" placeholder="Ingresa tu Nombre Completo" />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" name="correo" placeholder="ingresa tu email" />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" name="mensaje" placeholder="Ingresa tu mensaje"></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </Slide>
      </Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #8c00ffef;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #c073ffef;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #d4a6faef);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;
