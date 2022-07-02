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
        <StyledP>
          Mauris sapien risus, ornare at nunc id, tincidunt mollis metus. Ut
          accumsan justo libero. Morbi ullamcorper id dui at feugiat. Aenean id
          ligula ut elit molestie auctor. Donec ac dictum ante, eget gravida
          tellus. Curabitur tempor placerat mi, non dictum orci faucibus vitae.
          Nam tristique ultrices justo, vitae pellentesque quam scelerisque
          eget. Sed tempus feugiat augue nec tincidunt. Nullam leo lectus,
          placerat ac dignissim eget, finibus quis erat. Vestibulum nec tempor
          lacus, eu mattis tellus. Ut orci metus, suscipit id nulla sed,
          dignissim venenatis nunc.
        </StyledP>

        <StyledA href="/" target="_blank">
          Boton
        </StyledA>
      </StyledSection>
    </StyledDiv>
  );
};

export default App;
