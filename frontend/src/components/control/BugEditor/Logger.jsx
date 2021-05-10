import React, { useState } from 'react'
import { logBug } from '../../../adapters'
import {
  LoggerForm, InputContainer, LoggerInput, LoggerSelect,
  LoggerLabel, LoggerTextarea, EditorBttn, ErrorMsg
} from '../../style/BugEditor/BugEditorStyles'

/* false is preset in bugin because currently users can't submit a new fixed bug.
This allows easy change in future if wanted
bugIn values match python _ var naming conventions to match backend */
export default function Logger () {
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

  const validateBugIn = () => {
    let isValid = true
    for (const [key, value] of Object.entries(bugIn)) {
      if (value === '') {
        isValid = false
        return isValid
      }
    }
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateBugIn()) {
      setError('Please fill in every field')
      return
    }
    const result = await logBug(bugIn)
    console.log(result.data)
  }

  return (
    <LoggerForm onSubmit={handleSubmit}>
      <InputContainer start={0} end={2}>
        <LoggerLabel>App Name</LoggerLabel>
        <LoggerInput type='text' onChange={handleAppNameChange} />
      </InputContainer>
      <InputContainer justify='end'>
        <LoggerLabel>Language</LoggerLabel>
        <LoggerSelect onChange={handleLanguageChange}>
          <option />
          <option>Python</option>
          <option>Javascript</option>
        </LoggerSelect>
      </InputContainer>
      <InputContainer justify='start'>
        <LoggerLabel>Error Type</LoggerLabel>
        <LoggerSelect onChange={handleErrorTypeChange}>
          <option />
          <option>Syntax Error</option>
          <option>Logical Error</option>
          <option>Semantic Error</option>
          <option>Runtime Error</option>
          <option>Resource Error</option>
        </LoggerSelect>
      </InputContainer>
      <InputContainer start={0} end={2}>
        <LoggerLabel>Initial Code</LoggerLabel>
        <LoggerTextarea rows='10' onChange={handleInitCode} />
      </InputContainer>
      <InputContainer start={0} end={2}>
        <ErrorMsg>{error}</ErrorMsg>
      </InputContainer>
      <InputContainer start={0} end={2}>
        <EditorBttn type='submit'>Submit</EditorBttn>
      </InputContainer>
    </LoggerForm>
  )
}
