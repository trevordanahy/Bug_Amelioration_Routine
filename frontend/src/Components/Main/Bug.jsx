import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 10px;
  background: #9e9e9e;
  border: solid 2px black;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 10% 75% 15%;
  justify-items: center;
`
const Indicator = styled.div`
  background: #752826;
  width: 40px;
`
const BugTitle = styled.h3`
  color: black;
`
const DateCreated = styled.h5`
  color: black;
`

export default function Bug ({ entry }) {
  console.log(entry)
  return (
    <Container>
      <Indicator />
      <BugTitle>{`${entry.language} ${entry.error_type}`}</BugTitle>
      <DateCreated>{entry.created_date}</DateCreated>
    </Container>
  )
}
