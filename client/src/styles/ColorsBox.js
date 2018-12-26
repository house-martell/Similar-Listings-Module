import styled from 'styled-components';

const ColorsBox = styled.div`
  display: inline-block;
  background: black;
  width: 300px;
  height: 100px;
  transition: opacity 0 ease-in-out;

  &:hover {
    transform: opacity 1
  }
`;

export default ColorsBox;
