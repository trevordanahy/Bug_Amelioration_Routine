import React from 'react'
import { EditorStyle, SectionTitle } from '../../style/BugEditor/BugEditorStyles'
import Logger from './Logger'
import Fixer from './Fixer'

export default function Editor ({ displayLog, selectedBug, selectBug }) {
  const handleLogNewBug = () => {
    selectBug('')
  }

  return (
    <EditorStyle>
      <SectionTitle>Editor</SectionTitle>
      {selectedBug
        ? <>
          <button onClick={handleLogNewBug}>Log New Bug</button>
          <Fixer displayLog={displayLog} selectedBug={selectedBug} />
          </>
        : <Logger displayLog={displayLog} />}
    </EditorStyle>
  )
}
