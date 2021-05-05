import styled from 'styled-components'

export const Indicator = styled.div`
  background: ${props => props.status ? '#124D25' : '#752826'};
  border-radius: 50%;
  width: 25px;
  height: 25px;
`

export const Container = styled.div`
  margin: 10px 10px 15px;
  background: ${props => props.showCode ? (props.status ? ' #124D25' : '#752826') : '#818797'};
  color: ${showCode => showCode ? '#F4ECE7' : 'black'};
  opacity: ${showCode => showCode ? 1 : 0.9};
  border: 2px solid  black;
  border-radius: 25px 5px 5px 25px;
  box-shadow: 3px 3px 8px black;
  transition: transform .5s, color .5s;

  &:hover {
    color: white;
    transform: scale(1.02);
  }`

export const BugBar = styled.div`
  display: grid;
  grid-template-columns: 5% 80% 15%;
  justify-items: center;
  align-items: center;
`

// will add styles later
export const BugTitle = styled.h3`
`
export const DateCreated = styled.h5`
`
