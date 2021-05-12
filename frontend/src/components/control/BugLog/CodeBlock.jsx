import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-vsc-dark-plus.css'
import { CodeDiv, CodePre } from '../../style/BugLog/CodeBlockStyles'

export default function CodeBlock ({ entry, showCode, fixed }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [showCode])

  return (
    <CodeDiv className='Code'>
      <CodePre className={`language-${entry.language.toLowerCase()}`}>
        <code className={`language-${entry.language.toLowerCase()}`}>{
         fixed ? entry.fixed_code : entry.init_code
        }
        </code>
      </CodePre>
    </CodeDiv>
  )
}
