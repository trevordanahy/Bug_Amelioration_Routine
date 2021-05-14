import styled from 'styled-components'

export const HomepageDiv = styled.div`
  margin: 0;
  background: ${props => props.theme.mainShade};
  color: ${props => props.theme.secondaryShade};
  width: 100%;
  min-height: 120vh;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
`
export const HomepageHeader = styled.h1`
  margin: .25rem .5rem;
  font-size: 8vh;
  width: 100vw;
  height: auto;
`
export const About = styled.p`
  margin: .25rem .5rem;
  font-size: 5vh;
  width: 100vw;
`
export const CardList = styled.div`
  width: 100%;
  min-height: 120vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const CardContainer = styled.div`
  width: 90vw;
  height: auto;
  margin: 1rem;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  justify-content:center;
  color: ${props => props.theme.mainShade};

  @media (min-width: 650px) {
    width: 100%;
    height: 40vh;
    flex-flow: ${props => props.flip ? 'row-reverse nowrap' : 'row nowwrap'};
    
  }
`
export const OffsetCard = styled.div`
  width: 70vw;
  background: ${props => props.theme.secondaryAccent};
  height: auto;
  border-radius: 15px;
  margin: 3px;
  align-self: center;
  z-index: 0;

  @media (min-width: 650px) {
    height: 100%;
    width: auto;
    margin-left: ${props => props.flip ? '-1rem' : 0};
  }

`
export const Graphic = styled.img`
  align-self: center;
  justify-self: center;
  margin: 5px 5px 1rem 5px;
  height: auto;
  width: 100%;

  @media (min-width: 650px) {
    height: 95%;
    width: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: ${props => props.flip ? '5px' : '1.2rem'};
    margin-right: ${props => props.flip ? '1.2rem' : '5px'};
    
    align-self: flex-start;
    justify-self: center;
  }
`

export const MainCard = styled.div`
  max-width: 60vw;
  background: ${props => props.theme.secondaryShade};
  border-radius: 15px;
  margin-top: -1rem;
  align-self: center;
  z-index: 1;

  @media (min-width: 650px) {
    height: 90%;
    max-width: 40vw;
    margin-top: 0;
    margin-left: ${props => props.flip ? 0 : '-1rem'};
  }
`

export const CardHeader = styled.h1`
  margin: .5rem;
  font-weight: bold;
  font-size: 5vh;
`
export const CardDescription = styled.p`
  margin: .25rem;
  font-size: 3vh;

`
