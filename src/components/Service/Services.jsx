import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Mis <span className="purple">Skills</span>
        </h4>
        <h1>Tecnologías que manejo</h1>
      </Slide>
        <Cards>
          {skills.map((skill, i) => (
            <Card Icon={`/skills/${skill.image}`} title={skill.title} key={i} />
          ))}
        </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin-top: 3rem;
  gap: 1rem;

  img {
    height: 50px;
  }
`;

const skills = [
  {
    image: "java.svg",
    title: "Java",
  },
  {
    image: "python.svg",
    title: "Python",
  },
  {
    image: "c-cpp.svg",
    title: "C, C++",
  },
  {
    image: "terminal.svg",
    title: "Windows y Linux",
  },
  {
    image: "mysql.svg",
    title: "Mysql",
  },
  {
    image: "sql-server.svg",
    title: "Sql Server",
  },
  {
    image: "mongodb.svg",
    title: "Mongodb",
  },
  {
    image: "html.svg",
    title: "HTML",
  },
  {
    image: "css.svg",
    title: "CSS",
  },
  {
    image: "js.svg",
    title: "JavaScript",
  },
  {
    image: "node.svg",
    title: "Node.js",
  },
  {
    image: "react.svg",
    title: "React.js",
  },
  {
    image: "express.svg",
    title: "Express.js",
  },
  {
    image: "next.svg",
    title: "Next.js",
  },
  {
    image: "bootstrap.svg",
    title: "Bootstrap",
  },
  {
    image: "git.svg",
    title: "git",
  },
  {
    image: "github.svg",
    title: "Github",
  },
  {
    image: "office.svg",
    title: "Office",
  },
  {
    image: "electronica.svg",
    title: "Electrónica",
  },

  {
    image: "hs.svg",
    title: "Hardware y Software",
  },
  {
    image: "photoshop.svg",
    title: "Photoshop",
  },
];
