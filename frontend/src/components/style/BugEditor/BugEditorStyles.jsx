import styled from 'styled-components'

export const EditorStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const SectionTitle = styled.h1`
  align-self: center;
  margin: 10px 0px 0px 40px;
  color: ${props => props.theme.secondaryShade};
  background: ${props => props.theme.mainShade};
`
export const LoggerForm = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  border: ${props => props.theme.secondaryShade};
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: ${props => props.start};
  grid-column-end: span ${props => props.end};
  justify-self: ${props => props.justify};
  margin: 5px;
`
export const LoggerLabel = styled.label`
  align-self: center;
`
export const LoggerInput = styled.input`
  align-self: center;
  width: 80%;
`
export const LoggerTextarea = styled.textarea`
  align-self: center;
  width: 80%;
`
export const EditorBttn = styled.button`
  background: ${props => props.theme.secondaryShade};
  color: ${props => props.theme.mainShade};
  width: 30%;
  border-radius: 5px;
  align-self: center;
  grid-column-start: ${props => props.start};
  grid-column-end: span ${props => props.end};
`
