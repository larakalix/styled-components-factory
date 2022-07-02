import { styled } from './styled/styled';

const red = 'tomato';
const size = '1.2rem';

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
  border-radius: 0.25rem;
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
    </StyledDiv>
  );
}

export default App;
