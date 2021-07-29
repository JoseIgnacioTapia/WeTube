import styled, { keyframes } from 'styled-components';

// Create the keyframes
const skRotateplane = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

// Create component
const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: #333;

  margin: 100px auto;
  -webkit-animation: ${skRotateplane} 1.2s infinite ease-in-out;
  animation: ${skRotateplane} 1.2s infinite ease-in-out;
`;

const Spinner = () => {
  return <Square></Square>;
};

export default Spinner;
