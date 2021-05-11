import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-vsc-dark-plus.css'
import { BugFixBttn, CodeDiv, CodePre } from '../../style/BugLog/CodeBlockStyles'

export default function CodeBlock ({ entry, showCode, selectBug }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [showCode])

  const handleFix = async () => {
    selectBug(entry)
  }

  return (
    <CodeDiv className='Code'>
      <CodePre className={`language-${entry.language.toLowerCase()}`}>
        <code className={`language-${entry.language.toLowerCase()}`}>{entry.init_code}</code>
      </CodePre>
      <BugFixBttn onClick={handleFix}>Fix</BugFixBttn>
    </CodeDiv>
  )
}
