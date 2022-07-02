import { styled } from './styled/styled';

const red = 'tomato';
const size = '1.2rem';
const rad = '0.25rem';

const StyledDiv = styled.div`
  background-color: ${red};
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${size};
`;

const StyledList = styled.ul`
  background-color: greenyellow;
  padding: 2rem;
  border-radius: ${rad};
`;

const StyledSection = styled.section`
  background-color: blue;
  padding: 12px 20px;
  color: white;
  border-radius: ${rad};
`;

const StyledA = styled.a`
  display: block;
  color: white;
  background-color: #000;
  border-radius: ${rad};
  margin-top: 1rem;
  padding: 10px 20px;
  margin-bottom: 2srem;
`;

function App() {
  return (
    <StyledDiv>
      <p>Hola mundo</p>
      <StyledList>
        <li>Manzanas</li>
        <li>Peras</li>
        <li>Uvas</li>
      </StyledList>
      <StyledSection>
        <h1>Ivan Lara estuvo aca</h1>
        <StyledA href="/" target="_blank">
          Boton
        </StyledA>
      </StyledSection>
    </StyledDiv>
  );
}

export default App;
