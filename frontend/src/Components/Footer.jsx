import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  background: #752826;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display:flex;
  flex-direction: row;
`
const LinkContainer = styled.div`
  left: 0;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
`
const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`

const StyledA = styled.a`
  color: #DCD7CB;
  margin: 10px;
`

const ProfileContainer = styled.div`
  position: fixed;
  right: 5%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`

const Profile = styled.img`
  height: 30px;
  width: auto;
  margin: 5px;
`
const links = [
  { title: 'Home', address: '/home' },
  { title: 'About', address: '/about' },
  { title: 'My Personal Site', address: 'http://trevordanahy.dev' }
]

const siteLinkList = links.map((link) => {
  return (
    <li key={link.title}>
      <StyledA href={link.address}>{link.title}</StyledA>
    </li>
  )
})

export default function footer () {
  return (
    <Footer>
      <LinkContainer>
        <StyledUl>{siteLinkList}</StyledUl>
      </LinkContainer>
      <ProfileContainer>
        <a href='https://github.com/trevordanahy'><Profile src='#' /></a>
      </ProfileContainer>
    </Footer>
  )
}
