import styled from 'styled-components'

export default styled.main`
  margin: 0;
  width: 100vw;
  background: ${props => props.theme.mainShade};
  color: ${props => props.theme.secondaryShade};
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;

  @media (min-width: 650px) {
    flex-flow: row nowrap;
  }
`
