import styled from 'styled-components'

export const Indicator = styled.div`
  background: ${props => props.status ? '#124D25' : '#752826'};
  border-radius: 50%;
  width: 25px;
  height: 25px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 15px;
  background: ${props => props.showCode ? (props.status ? ' #124D25' : '#752826') : props.theme.main};
  color: ${props => props.showCode ? '#F4ECE7' : 'black'};
  opacity: ${props => props.showCode ? 1 : 0.9};
  border: 2px solid  black;
  border-radius: 25px 5px 5px 25px;
  box-shadow: 3px 3px 8px black;
  transition: transform .5s, color .5s;

  &:hover {
    color: white;
    background: ${props => props.status ? '#124D25' : '#752826'};
    transform: scale(1.02);
  }`

export const BugBar = styled.div`
  display: grid;
  grid-template-columns: 5% 80% 10% 5%;
  justify-items: center;
  align-items: center;
`

export const BugDelete = styled.button`
  height: 100%;
  width: 100%;
  background: #ac0404;
  color: black;
  font-size: px;
`
export const BugFix = styled.button`
  margin: 5px 0px 0px 0px;
  width: 100%;
  border-radius: 25px 5px 5px 25px;
  background: ${props => props.theme.mainShade};
  color: ${props => props.theme.secondaryShade};
  align-self: center;
`

// will add styles later
export const BugTitle = styled.h1`
  font-size: 20px;
`
export const DateCreated = styled.h1`
  text-align: right;
  margin-right: 5px;
  font-size: 16px;
`
