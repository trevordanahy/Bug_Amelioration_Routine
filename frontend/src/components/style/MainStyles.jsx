import styled from 'styled-components'

export default styled.main`
  margin: 0;
  background: ${props => props.theme.mainShade};
  color: ${props => props.theme.secondaryShade};
  flex-grow: 1;
  display: grid;
  grid-template-columns: 60% 40%;
`
