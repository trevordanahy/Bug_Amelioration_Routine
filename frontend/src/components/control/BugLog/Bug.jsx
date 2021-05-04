import React, { useState } from 'react'
import CodeBlock from './CodeBlock'
import { Container, BugBar, Indicator, BugTitle, DateCreated } from '../../style/BugLog/BugStyles'

export default function Bug ({ entry }) {
  const [showCode, setShowCode] = useState(false)

  const displayCode = () => {
    setShowCode(!showCode)
  }

  return (
    <Container showCode={showCode} onClick={displayCode}>
      <BugBar>
        <Indicator />
        <BugTitle>{`${entry.app} | ${entry.error_type} (${entry.language})`}</BugTitle>
        <DateCreated>{entry.created_date}</DateCreated>
      </BugBar>
      <CodeBlock code={entry.init_code} language={entry.language} showCode={showCode} />
    </Container>
  )
}
