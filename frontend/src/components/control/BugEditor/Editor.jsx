import React from 'react'
import { EditorStyle, SectionTitle } from '../../style/BugEditor/BugEditorStyles'
import Logger from './Logger'

export default function Editor () {
  return (
    <EditorStyle>
      <SectionTitle>Editor</SectionTitle>
      <Logger />
    </EditorStyle>
  )
}
