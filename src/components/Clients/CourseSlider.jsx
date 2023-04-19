import React from "react";
import styled from "styled-components";

const CourseSlider = (props) => {
  const { type, company, page, channel, icon, disc } = props.item;
  return (
    <Container>
      <Header>
        <span className="quote">{type}</span>
      </Header>
      <Body>{disc}</Body>
      <Footer>
        <img src={icon} alt={company} />
        <div className="details">
          <h1>{company}</h1>
          {channel ? <p>{channel}</p> : <></>}
          {page ? (
            <p>
              {
                <a className="styled" href={page} target="_blank">
                  {type === "Curso" ? <>Ver Curso</> : <>Ver Certificado</>}
                </a>
              }
            </p>
          ) : (
            <></>
          )}
        </div>
      </Footer>
    </Container>
  );
};

export default CourseSlider;

const Container = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1.5rem 1rem;
  margin: 0 1rem;
  height: 200px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .quote {
    font-size: 1rem;
    color: #8c00ffef;
    opacity: 0.7;
  }

  .star {
    color: #ffcd3c;
    font-size: 1.3rem;
  }
`;
const Body = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  height: 30px;
`;
const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img{
        width: 4rem;
        height: 4rem;
        border-radius: 10px;
        object-fit: cover;
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: rgba(255,255,255,0.500);
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
    }
`;
