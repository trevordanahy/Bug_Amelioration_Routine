import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background: ${props => props.theme.main};
  height: 60px;
  width: 100%;
  display:flex;
  flex-direction: row;
`
export const LinkContainer = styled.div`
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
  margin: 10px;
`

export const ProfileContainer = styled.div`
  position: fixed;
  right: 5%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`

export const Profile = styled.img`
  height: 30px;
  width: auto;
  margin: 5px;
`
