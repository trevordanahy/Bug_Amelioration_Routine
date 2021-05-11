import React from 'react'
import { EditorStyle, SectionTitle } from '../../style/BugEditor/BugEditorStyles'
import Logger from './Logger'
import Fixer from './Fixer'

export default function Editor ({ displayLog }) {
  return (
    <EditorStyle>
      <SectionTitle>Editor</SectionTitle>
      <Logger displayLog={displayLog} />
      <Fixer />
    </EditorStyle>
  )
}
