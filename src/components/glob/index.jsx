import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  width: ${(props) => (props.width ? props.width : '95')}%;
`;

export { Container };
