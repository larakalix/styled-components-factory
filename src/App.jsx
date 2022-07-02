import {
  StyledA,
  StyledDiv,
  StyledList,
  StyledSection,
  StyledP,
} from './styled-components/styled-components';

const App = () => {
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
        <hr />
        <StyledP>Jajajajaja</StyledP>

        <StyledA href="/" target="_blank">
          Boton
        </StyledA>
      </StyledSection>
    </StyledDiv>
  );
};

export default App;
