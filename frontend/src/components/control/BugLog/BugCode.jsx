import React from 'react'
import { Explanation, BugFixBttn } from '../../style/BugLog/CodeBlockStyles'
import CodeBlock from './CodeBlock'

export default function BugCode ({ entry, showCode, selectBug }) {
  const handleFix = async () => {
    selectBug(entry)
  }

  if (showCode === false) {
    return null
  }

  if (entry.is_fixed) {
    return (
      <>
        <CodeBlock fixed={false} entry={entry} showCode={showCode} />
        <Explanation>{entry.explanation}</Explanation>
        <CodeBlock fixed entry={entry} showCode={showCode} />
      </>
    )
  }
  return (
    <>
      <CodeBlock
        entry={entry}
        fixed={false}
        showCode={showCode}
        selectBug={selectBug}
      />
      <BugFixBttn onClick={handleFix}>Fix</BugFixBttn>
    </>

  )
}
