import React, { useState } from 'react'
import { fixBug } from '../../../adapters'
import {
  ComponentDiv, ComponentTitle,
  EditorForm, EditorLabel,
  Container, EditorTextarea,
  EditorBttn, LogBugFormBttn
} from '../../style/BugEditor/BugEditorStyles'

export default function Fixer ({ displayLog, selectedBug, selectBug }) {
  const [bugFix, setBugFix] = useState({
    fixed_code: '',
    explanation: ''
  })

  const handleFixedCode = (e) => {
    setBugFix({ ...bugFix, fixed_code: e.target.value })
  }

  const handleExplanation = (e) => {
    setBugFix({ ...bugFix, explanation: e.target.value })
  }

  const handleLogNewBug = (e) => {
    e.preventDefault()
    selectBug('')
  }

  const handleApplyFix = async (e) => {
    const id = selectedBug._id
    e.preventDefault()
    console.log(bugFix)
    const result = await fixBug(id, bugFix)
    console.log(result)
    setBugFix({ fixed_code: '', explanation: '' })
    displayLog()
  }

  return (
    <ComponentDiv>
      <ComponentTitle>Fix Bug</ComponentTitle>
      <EditorForm>
        <Container start={0} end={2}>
          <EditorLabel htmlFor='fixed code'>Fixed Code</EditorLabel>
          <EditorTextarea id='fixed code' rows='10' onChange={handleFixedCode} />
        </Container>
        <Container start={0} end={2}>
          <EditorLabel htmlFor='explanation' rows={2}>Explanation</EditorLabel>
          <EditorTextarea id='explanation' onChange={handleExplanation} />
        </Container>
        <Container start={0} end={2}>
          <EditorBttn type='submit' onClick={handleApplyFix}>Apply Fix</EditorBttn>
        </Container>
        <LogBugFormBttn onClick={handleLogNewBug}>Log New Bug</LogBugFormBttn>
      </EditorForm>
    </ComponentDiv>
  )
}
