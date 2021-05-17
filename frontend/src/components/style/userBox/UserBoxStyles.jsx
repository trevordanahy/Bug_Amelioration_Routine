import styled from 'styled-components'

export const UserBttn = styled.button`
  background: ${props => props.theme.darkShade};
  color: ${props => props.theme.lightShade};
  border-color: ${props => props.theme.lightShade};
  font-weight: bold;
  height: 2rem;
  border-radius: 5px;
  margin: 0px 20px 10px 10px;
  padding: 5px;
`
export const Button = styled.button`
  color: #DCD7CB;
  background: #1E1E21;
  border-radius: 5px;
  padding: 5px;
`

export const DisplayUser = styled.h2`
  color: ${props => props.theme.lightShade};
  margin: 0px 20px 10px 10px;
`
