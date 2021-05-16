import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background: ${props => props.theme.main};
  width: 100vw;
  height: auto;
  border-top: 2px solid black;
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
  color: #2B2D36;
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
