import React, { useState } from 'react'
import CodeBlock from './CodeBlock'
import { Container, BugBar, Indicator, BugTitle, BugDelete, DateCreated } from '../../style/BugLog/BugStyles'
import { deleteBug } from '../../../adapters'

export default function Bug ({ entry, displayLog }) {
  const [showCode, setShowCode] = useState(false)

  const bugDelete = async () => {
    const res = await deleteBug(entry._id)
    console.log(res)
    displayLog()
  }

  const displayCode = () => {
    setShowCode(!showCode)
  }

  return (
    <Container showCode={showCode} onClick={displayCode} status={entry.is_fixed}>
      <BugBar>
        <Indicator status={entry.is_fixed} />
        <BugTitle>{`${entry.app} | ${entry.error_type} (${entry.language})`}</BugTitle>
        <DateCreated>{entry.created_date}</DateCreated>
        <BugDelete onClick={bugDelete}><b>X</b></BugDelete>
      </BugBar>
      <CodeBlock code={entry.init_code} language={entry.language} showCode={showCode} />
    </Container>
  )
}
