import React from 'react'
import {
  ComponentDiv, ComponentTitle,
  EditorForm, EditorLabel,
  EditorInput, Container,
  EditorTextarea, BugSelection,
  EditorBttn
} from '../../style/BugEditor/BugEditorStyles'

export default function Fixer ({ displayLog, selectedBug }) {
  const handleApplyFix = async () => {

  }

  return (
    <ComponentDiv>
      <ComponentTitle>Fixer</ComponentTitle>
      <BugSelection>{selectedBug}</BugSelection>
      <EditorForm>
        <Container start={0} end={2}>
          <EditorLabel>Fixed Code</EditorLabel>
          <EditorTextarea rows='10' />
        </Container>
        <Container start={0} end={2}>
          <EditorLabel rows={2}>Explanation</EditorLabel>
          <EditorInput />
        </Container>
        <Container start={0} end={2}>
          <EditorBttn>Apply Fix</EditorBttn>
        </Container>
      </EditorForm>
    </ComponentDiv>
  )
}
