import { styled } from '../styled-factory/styled-factory';

const red = 'tomato';
const size = '1.2rem';
const rad = '0.25rem';

export const StyledDiv = styled.div`
  background-color: ${red};
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${size};
`;

export const StyledList = styled.ul`
  background-color: greenyellow;
  padding: 2rem;
  border-radius: ${rad};
`;

export const StyledSection = styled.section`
  background-color: blue;
  padding: 12px 20px;
  color: white;
  border-radius: ${rad};
  margin-bottom: 4rem;
`;

export const StyledA = styled.a`
  display: block;
  color: white;
  background-color: #000;
  border-radius: ${rad};
  margin-top: 1rem;
  padding: 10px 20px;
  margin-bottom: 2srem;
`;

export const StyledP = styled.p`
  text-align: center;
  padding: 30px;
  color: purple;
  background-color: red;
  border-radius: ${rad};
  ser-select: none;
  max-width: 70vw;
  margin-bottom: 2rem;
`;
