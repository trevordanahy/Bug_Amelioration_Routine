import React from 'react'
import { Explanation } from '../../style/BugLog/CodeBlockStyles'
import CodeBlock from './CodeBlock'

export default function BugCode ({ entry, showCode }) {
  if (entry.is_fixed) {
    return (
      <>
        <CodeBlock code={entry.init_code} language={entry.language} showCode={showCode} />
        <Explanation>{entry.explanation}</Explanation>
        <CodeBlock code={entry.fixed_code} language={entry.language} showCode={showCode} />
      </>

    )
  }
  return (
    <CodeBlock code={entry.init_code} language={entry.language} showCode={showCode} />
  )
}
