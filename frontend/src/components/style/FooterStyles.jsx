import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background: ${props => props.theme.main};
  width: 100%;
  height: auto;
  border-top: 2px solid ${props => props.theme.darkShade};
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  
`
export const LinkContainer = styled.div`
  justify-self: flex-start;
  left: 0;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
`
export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`

export const StyledA = styled.a`
  color: ${props => props.theme.lightShade};
  font-size: 1em;
  margin: 10px;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-flow: row-reverse wrap;
`

export const Profile = styled.img`
  height: 2em;
  width: auto;
  margin: 1em;
`
