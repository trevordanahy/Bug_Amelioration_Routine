import React from 'react'
import { LoggerForm, InputContainer, LoggerInput, LoggerLabel, LoggerTextarea, EditorBttn } from '../../style/BugEditor/BugEditorStyles'

export default function Logger () {
  return (
    <LoggerForm>
      <InputContainer start={0} end={2}>
        <LoggerLabel>App Name</LoggerLabel>
        <LoggerInput type='text' />
      </InputContainer>
      <InputContainer justify='end'>
        <LoggerLabel>Language</LoggerLabel>
        <LoggerInput type='text' />
      </InputContainer>
      <InputContainer justify='start'>
        <LoggerLabel>Error Type</LoggerLabel>
        <LoggerInput type='text' />
      </InputContainer>
      <InputContainer start={0} end={2}>
        <LoggerLabel>Initial Code</LoggerLabel>
        <LoggerTextarea rows='10' />
      </InputContainer>
      <InputContainer start={0} end={2}>
        <EditorBttn>Submit</EditorBttn>
      </InputContainer>
    </LoggerForm>
  )
}
