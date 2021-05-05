import React, { useState } from 'react'
import CodeBlock from './CodeBlock'
import { Container, BugBar, Indicator, BugTitle, DateCreated } from '../../style/BugLog/BugStyles'

export default function Bug ({ entry }) {
  const [showCode, setShowCode] = useState(false)
  console.log(entry.is_fixed)

  const displayCode = () => {
    setShowCode(!showCode)
  }

  return (
    <Container showCode={showCode} onClick={displayCode} status={entry.is_fixed}>
      <BugBar>
        <Indicator status={entry.is_fixed} />
        <BugTitle>{`${entry.app} | ${entry.error_type} (${entry.language})`}</BugTitle>
        <DateCreated>{entry.created_date}</DateCreated>
      </BugBar>
      <CodeBlock code={entry.init_code} language={entry.language} showCode={showCode} />
    </Container>
  )
}
