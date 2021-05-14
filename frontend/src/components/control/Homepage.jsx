import React from 'react'
import LogBookGraphic from '../../img/logBook.svg'
import {
  HomepageDiv, HomepageHeader, About, Graphic, CardHeader,
  CardDescription, CardList, MainCard, OffsetCard, CardContainer
} from '../style/HomepageStyles'

export default function Homepage () {
  return (
    <HomepageDiv>
      <HomepageHeader> Welcome to Your Personal Bug Journal</HomepageHeader>
      <About>Here</About>
      <CardList>
        <CardContainer>
          <OffsetCard>
            <Graphic src={LogBookGraphic} alt='Log Book Graphic' />
          </OffsetCard>
          <MainCard>
            <CardHeader>Create a Bug Log</CardHeader>
            <CardDescription>
              Create an account and start your bug log.  Log bugs by language and error type.  Currently only Python and Javascrit are supported
            </CardDescription>
          </MainCard>
        </CardContainer>
      </CardList>
    </HomepageDiv>
  )
}
