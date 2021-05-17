import styled from 'styled-components'

export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  font-weight: bold;
`

export const InputLabel = styled.label`
  margin: 15px 0px 5px;
  font-weight: bold;
`

export const AuthBttn = styled.button`
  color: ${props => props.theme.lightShade};
  background: ${props => props.theme.darkAccent};
  height: 40px;
  width: 80px;
  margin: 10px;
`
