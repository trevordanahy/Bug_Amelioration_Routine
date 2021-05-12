import styled from 'styled-components'

export const EditorStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const SectionTitle = styled.h1`
  align-self: center;
  margin: 10px 0px 0px 0px;
  color: ${props => props.theme.secondaryShade};
  background: ${props => props.theme.mainShade};
`
export const ComponentTitle = styled.h2`
  align-self: center;
  margin: 10px 0px 0px 0px;
  color: ${props => props.theme.secondaryShade};
  background: ${props => props.theme.mainShade};
  margin-bottom: 20px;
`
export const EditorForm = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  border: ${props => props.theme.secondaryShade};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: ${props => props.start};
  grid-column-end: span ${props => props.end};
  justify-self: ${props => props.justify};
  margin: 5px;
`
export const EditorLabel = styled.label`
  align-self: center;
`
export const EditorInput = styled.input`
  align-self: center;
  width: 80%;
`
export const EditorSelect = styled.select`
  align-self: center;
  width: 80%;
`

export const EditorTextarea = styled.textarea`
  white-space: nowrap;
  overflow-x: scroll;
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

export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  font-weight: bold;
`

export const ComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${props => props.theme.secondaryShade};
  border-radius: 10px;
  margin: 15px;
`

export const BugSelection = styled.div`
  background: ${props => props.theme.main};
  color: black;
`
