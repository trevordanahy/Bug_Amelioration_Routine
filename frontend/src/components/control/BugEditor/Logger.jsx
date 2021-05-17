import React, { useState } from 'react'
import { logBug } from '../../../adapters'
import {
  EditorForm, Container, EditorInput, EditorSelect, ComponentDiv,
  EditorLabel, EditorTextarea, EditorBttn, ErrorMsg, ComponentTitle
} from '../../style/BugEditor/BugEditorStyles'

/* false is preset in bugin because currently users can't submit a new fixed bug.
This allows easy change in future if wanted
bugIn values match python _ var naming conventions to match backend */
export default function Logger ({ displayLog }) {
  const [bugIn, setBugIn] = useState({
    app: '',
    language: '',
    error_type: '',
    is_fixed: false,
    init_code: ''
  })
  const [error, setError] = useState('')

  const handleAppNameChange = (e) => {
    setBugIn({ ...bugIn, app: e.target.value })
  }

  const handleLanguageChange = (e) => {
    setBugIn({ ...bugIn, language: e.target.value })
  }

  const handleErrorTypeChange = (e) => {
    setBugIn({ ...bugIn, error_type: e.target.value })
  }

  const handleInitCode = (e) => {
    setBugIn({ ...bugIn, init_code: e.target.value })
  }

  const validate = (object) => {
    let isValid = true
    if (Object.values(object).includes('')) {
      isValid = false
      return isValid
    }
    setError('')
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate(bugIn)) {
      setError('Please fill in every field')
      return
    }
    const result = await logBug(bugIn)
    console.log(result.data)
    setBugIn({
      app: '',
      language: '',
      error_type: '',
      is_fixed: false,
      init_code: ''
    })
    displayLog()
  }

  return (
    <ComponentDiv>
      <ComponentTitle>Log New Bug</ComponentTitle>
      <EditorForm onSubmit={handleSubmit}>
        <Container start={0} end={2}>
          <EditorLabel htmlFor='app'>App Name</EditorLabel>
          <EditorInput id='app' type='text' onChange={handleAppNameChange} value={bugIn.app} />
        </Container>
        <Container justify='end'>
          <EditorLabel htmlFor='language'>Language</EditorLabel>
          <EditorSelect id='language' onChange={handleLanguageChange} value={bugIn.language}>
            <option />
            <option>Python</option>
            <option>Javascript</option>
          </EditorSelect>
        </Container>
        <Container justify='start'>
          <EditorLabel htmlFor='error type'>Error Type</EditorLabel>
          <EditorSelect separator id='error type' onChange={handleErrorTypeChange} value={bugIn.error_type}>
            <option />
            <option>Syntax Error</option>
            <option>Logical Error</option>
            <option>Semantic Error</option>
            <option>Runtime Error</option>
            <option>Resource Error</option>
          </EditorSelect>
        </Container>
        <Container start={0} end={2}>
          <EditorLabel htmlFor='initial code'>Initial Code</EditorLabel>
          <EditorTextarea id='initial code' rows='10' onChange={handleInitCode} value={bugIn.init_code} />
        </Container>
        <Container start={0} end={2}>
          <ErrorMsg>{error}</ErrorMsg>
        </Container>
        <Container start={0} end={2}>
          <EditorBttn type='submit'>Add Bug</EditorBttn>
        </Container>
      </EditorForm>
    </ComponentDiv>

  )
}
