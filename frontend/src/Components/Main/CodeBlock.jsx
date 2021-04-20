import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-vsc-dark-plus.css'
import styled from 'styled-components'

const CodeDiv = styled.div`
  margin-bottom: 0;
  border-radius: 5px;
`

export default function CodeBlock ({ code, language, showCode }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [showCode])

  if (showCode === false) {
    return null
  }

  return (
    <CodeDiv className='Code'>
      <pre className={`language-${language.toLowerCase()}`}>
        <code className={`language-${language.toLowerCase()}`}>{code}</code>
      </pre>
    </CodeDiv>
  )
}
