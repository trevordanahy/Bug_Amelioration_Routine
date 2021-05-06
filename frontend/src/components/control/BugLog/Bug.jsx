import React, { useState } from 'react'
import { Container, BugBar, Indicator, BugTitle, BugDelete, DateCreated } from '../../style/BugLog/BugStyles'
import { deleteBug } from '../../../adapters'
import BugCode from './BugCode'

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
      <BugCode entry={entry} showCode={showCode} />
    </Container>
  )
}
