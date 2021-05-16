import styled from 'styled-components'

export const Indicator = styled.div`
  background: ${props => props.status ? '#124D25' : '#752826'};
  border-radius: 100%;
  width: 25px;
  height: 25px;
  margin: .5em;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 15px;
  background: ${props => props.showCode ? (props.status ? ' #124D25' : '#752826') : props.theme.main};
  color: ${props => props.showCode ? '#F4ECE7' : 'black'};
  opacity: ${props => props.showCode ? 1 : 0.9};
  border: 2px solid ${props => props.theme.secondaryShade};
  border-radius: 25px 5px 5px 25px;
  box-shadow: 3px 3px 8px black;
  transition: transform .5s, color .5s;

  &:hover {
    color: white;
    background: ${props => props.status ? '#124D25' : '#752826'};
    transform: scale(1.02);
  }`

export const BugBar = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
export const BugTitle = styled.h1`
  font-size: 1em;
`
export const RightDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export const DateCreated = styled.h1`
  text-align: right;
  margin: 0em .5em 0em 1em;
  font-size: 16px;
`

export const BugDelete = styled.button`
  height: auto;
  width: 1.5em;
  padding: .25em;
  border-radius: 100%;
  border-color: black;
  background: #ac0404;
  color: black;
  font-size: 1.5m;
  margin-left: .5em;

`
export const BugFix = styled.button`
  margin: 5px 0px 0px 0px;
  width: 100%;
  border-radius: 25px 5px 5px 25px;
  background: ${props => props.theme.mainShade};
  color: ${props => props.theme.secondaryShade};
  align-self: center;
`
