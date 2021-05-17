import React from 'react'
import GithubLight from '../../img/GithubLight.png'
import {
  StyledFooter,
  LinkContainer,
  StyledUl,
  StyledA,
  ProfileContainer,
  Profile
} from '../style/FooterStyles'

const links = [
  { title: 'Home', address: '/home' },
  { title: 'Personal Site', address: 'http://trevordanahy.dev' }
]

const siteLinkList = links.map((link) => {
  return (
    <li key={link.title}>
      <StyledA href={link.address}>{link.title}</StyledA>
    </li>
  )
})

export default function Footer (theme) {
  return (
    <StyledFooter>
      <LinkContainer>
        <StyledUl>{siteLinkList}</StyledUl>
      </LinkContainer>
      <ProfileContainer>
        <a href='https://github.com/trevordanahy'>
          <Profile src={GithubLight} alt='Link to personal Github page' />
        </a>
      </ProfileContainer>
    </StyledFooter>
  )
}
