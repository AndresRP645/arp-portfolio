import React from "react";
import styled from "styled-components";

const Project = (props) => {
  const { img, title, disc, link } = props.item;
  return (
    <Container className="project">
      <figure>
        <img src={img} alt="project" />
        <figcaption>{title}</figcaption>
      </figure>

      <div className="disc">
        <p>{disc}</p>
        {link ? (
            <a className="styled" href={link} target="_blank">
              Ver repositorio
            </a>
        ) : null}
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 11.5rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 3px;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    display: block;
    width: inherit;
    height: inherit;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -15rem;
    text-align: center;
    padding: 1rem;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    align-items: center;
    vertical-align : middle;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
    }
  }

  :hover > img {
    transform: scale(1.5);
  }

  :hover > .disc {
    bottom: 0;
  }

  figcaption {
    font: italic smaller sans-serif;
    padding: 2px;
    text-align: center;
  }
`;
