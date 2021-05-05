import styled from 'styled-components'

export default styled.header`
  height: 65px;
  width: 100vw;
  background: ${props => props.theme.main};
  color: black;
  border-radius: 0px 0px 0px 5px;
  border-bottom: 3px solid black;
  display: grid;
  grid-template-columns: 89% 3% 8%;
  justify-items: center;
  align-items: center;
`
