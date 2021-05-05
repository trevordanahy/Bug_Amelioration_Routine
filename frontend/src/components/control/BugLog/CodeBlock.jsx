import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-vsc-dark-plus.css'
import { CodeDiv, CodePre } from '../../style/BugLog/CodeBlockStyles'

export default function CodeBlock ({ code, language, showCode }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [showCode])

  if (showCode === false) {
    return null
  }

  return (
    <CodeDiv className='Code'>
      <CodePre className={`language-${language.toLowerCase()}`}>
        <code className={`language-${language.toLowerCase()}`}>{code}</code>
      </CodePre>
    </CodeDiv>
  )
}
