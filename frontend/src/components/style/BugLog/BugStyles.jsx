import styled from 'styled-components'

const Indicator = styled.div`
background: ${(entry.is_fixed) ? '#124D25' : '#752826'};
border-radius: 50%;
width: 25px;
height: 25px;
`

const Container = styled.div`
margin: 10px 10px 15px;
margin-left: ${showCode ? '15px' : '-6%'};
// background is grey til clicked, then is red or green based on fixed status
background: ${showCode ? (entry.is_fixed ? ' #124D25' : '#752826') : '#818797'};
color: ${showCode ? '#F4ECE7' : 'black'};
opacity: ${showCode ? 1 : 0.9};
border: 2px solid  black;
border-radius: 25px 5px 5px 25px;
box-shadow: 3px 3px 8px black;
transition: transform .5s, color .5s;

&:hover {
  color: white;
  background: ${(entry.is_fixed) ? '#124D25' : '#752826'};
  transform: scale(1.02);
}`

const BugBar = styled.div`
  display: grid;
  grid-template-columns: 5% 80% 15%;
  justify-items: center;
  align-items: center;
`

// will add styles later
const BugTitle = styled.h3`
`
const DateCreated = styled.h5`
`
