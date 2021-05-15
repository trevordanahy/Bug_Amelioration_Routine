import React from 'react'
import LogBookGraphic from '../../img/logBook.svg'
import DoWork from '../../img/DoWork.svg'
import DiscoverBug from '../../img/DiscoverBug.svg'
import FixBug from '../../img/FixBug.svg'
import Analyze from '../../img/Analyze.svg'
import {
  HomepageDiv, HomepageHeader, About, Graphic, CardHeader,
  CardDescription, CardList, MainCard, OffsetCard, CardContainer
} from '../style/HomepageStyles'

export default function Homepage () {
  return (
    <HomepageDiv>
      <HomepageHeader> Start Your Bug Journal Routine</HomepageHeader>
      <About>Some About Information Here</About>
      <CardList>
        <CardContainer flip>
          <OffsetCard flip>
            <Graphic src={DoWork} alt='Working Graphic' />
          </OffsetCard>
          <MainCard flip>
            <CardHeader>Write Code</CardHeader>
            <CardDescription>
              Write your code and follow your normal workflow.
              We hope you will always write perfect code.
              But, eventually even the best developer will write a bug.
            </CardDescription>
          </MainCard>
        </CardContainer>
        <CardContainer>
          <OffsetCard>
            <Graphic src={DiscoverBug} alt='Discover Bug Graphic' />
          </OffsetCard>
          <MainCard>
            <CardHeader>Identify a Bug</CardHeader>
            <CardDescription>
              You don't need to log every single bug you create.
              If you can fix the bug in a couple of minutes then
              the bug was likely a typo or a simple mistake.
              Log a bug when there is something to learn from the bug.
            </CardDescription>
          </MainCard>
        </CardContainer>
        <CardContainer flip>
          <OffsetCard flip>
            <Graphic src={FixBug} alt='Fix Bug Graphic' />
          </OffsetCard>
          <MainCard flip>
            <CardHeader>Fix the Bug</CardHeader>
            <CardDescription>
              Review your code and find the issue.
              Write your solution and update your codebase.
              Add the fix to your buglog along with an explanation.
            </CardDescription>
          </MainCard>
        </CardContainer>
        <CardContainer>
          <OffsetCard>
            <Graphic src={LogBookGraphic} alt='Log Book Graphic' />
          </OffsetCard>
          <MainCard>
            <CardHeader>Log Everything</CardHeader>
            <CardDescription>
              The act of logging provides you with the time for reflection.
              Writting down your bugs and fixes helps you remember how to write better code.
            </CardDescription>
          </MainCard>
        </CardContainer>
        <CardContainer flip>
          <OffsetCard flip>
            <Graphic src={Analyze} alt='Discover Bug Graphic' />
          </OffsetCard>
          <MainCard flip>
            <CardHeader>Build Intuition</CardHeader>
            <CardDescription>
              As you journal you will start to discover mistakes you make commonly.
              Recording your bugs and fixes will build your intuition.
              With consistent logging you will start avoiding your common mistakes and write better code.
            </CardDescription>
          </MainCard>
        </CardContainer>
      </CardList>
    </HomepageDiv>
  )
}
