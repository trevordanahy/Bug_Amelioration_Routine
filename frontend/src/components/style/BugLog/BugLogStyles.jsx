import styled from 'styled-components'

export const LogContainer = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
`

export const SectionTitle = styled.h1`
  align-self: left;
  margin: 10px 0px 0px 40px;
  color: ${props => props.theme.secondaryShade};
  background: ${props => props.theme.mainShade};
   
`

export const LoggerContainer = styled.div`
  margin: 10px;
  display: flex;
`

export const Log = styled.div`
  margin: 5px;
  align-self: flex-end;
  width: 90%;
  background: #F4ECE7;
  border-color: #1b1b1b;
  border-style: solid;
  border-width: 2px 2px 2px 50px;
  box-shadow: 3px 3px 5px #1e1f1f;
  border-radius: 1px 2% 2% 1px;
  flex-grow: 1;
`
