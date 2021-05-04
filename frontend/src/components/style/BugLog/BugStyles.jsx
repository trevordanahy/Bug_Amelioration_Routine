import styled from 'styled-components'

export const Indicator = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
`

export const Container = styled.div`
  margin: 10px 10px 15px;
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
