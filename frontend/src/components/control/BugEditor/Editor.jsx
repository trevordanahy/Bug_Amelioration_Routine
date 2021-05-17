import React from 'react'
import { EditorStyle, SectionTitle } from '../../style/BugEditor/BugEditorStyles'
import Logger from './Logger'
import Fixer from './Fixer'

export default function Editor ({ displayLog, selectedBug, selectBug }) {
  return (
    <EditorStyle>
      <SectionTitle>Editor</SectionTitle>
      {selectedBug
        ? <Fixer displayLog={displayLog} selectedBug={selectedBug} selectBug={selectBug} />
        : <Logger displayLog={displayLog} />}
    </EditorStyle>
  )
}
