import React, { useState } from 'react'
import styled from 'styled-components'
import CodeBlock from './CodeBlock'

const Container = styled.div`
  margin: 15px;
  background: #bebbbb;
  border: solid 2px black;
  border-radius: 5px;
  box-shadow: 3px 3px 8px black;

  &:hover {
    color: #DCD7CB;
    background: #752826;
  }
`
const BugBar = styled.div`
  display: grid;
  grid-template-columns: 10% 75% 15%;
  justify-items: center;
`
const Indicator = styled.div`
  background: #752826;
  width: 40px;
`
const BugTitle = styled.h3`
`
const DateCreated = styled.h5`
`

export default function Bug ({ entry }) {
  const [showCode, setShowCode] = useState(false)

  const displayCode = () => {
    setShowCode(!showCode)
  }
  return (
    <Container>
      <BugBar onClick={displayCode}>
        <Indicator />
        <BugTitle>{`${entry.error_type} ${entry.language} `}</BugTitle>
        <DateCreated>{entry.created_date}</DateCreated>
      </BugBar>
      <CodeBlock code={entry.init_code} language={entry.language} showCode={showCode} />

    </Container>
  )
}
