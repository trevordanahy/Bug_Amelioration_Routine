import styled from 'styled-components'

export const EditorStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const SectionTitle = styled.h1`
  align-self: left;
  margin: 10px 0px 10px 40px;
  color: ${props => props.theme.secondaryShade};
  background: ${props => props.theme.mainShade};
`

export const EditorForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.mainShade};
  border: ${props => props.theme.secondaryAccent};
  border-radius: 25px;
`
export const LogBugFormBttn = styled.button`
  margin-top: 0px;
  width: 60%;
  border-radius: 10px 10px 0px 0px;
  align-self: center;
  background: ${props => props.theme.lightAccent};
`

export const ComponentTitle = styled.h2`
  align-self: center;
  margin: 10px 0px 0px 0px;
  color: ${props => props.theme.secondaryShade};
  background: ${props => props.theme.mainShade};
  margin-bottom: 20px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-self: ${props => props.justify};
  margin: 10px;
`
export const EditorLabel = styled.label`
  align-self: center;

`
export const EditorInput = styled.input`
  align-self: center;
  width: 60%;
  margin-bottom: 10px;
  border-color: ${props => props.theme.secondaryAccent};
`
export const EditorSelect = styled.select`
  align-self: center;
  width: 40%;
  border-color: ${props => props.theme.secondaryAccent};
  margin-bottom: ${props => props.separator ? '20px' : '5px'};
`

export const EditorTextarea = styled.textarea`
  white-space: nowrap;
  overflow-x: scroll;
  align-self: center;
  width: 80%;
  border-color: ${props => props.theme.secondaryAccent};
`
export const EditorBttn = styled.button`
  background: ${props => props.theme.darkAccent};
  color: ${props => props.theme.lightAccent};
  width: 30%;
  border-radius: 5px;
  margin: 20px 5px 20px 5px;
  align-self: center;
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  font-weight: bold;
`

export const ComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid ${props => props.theme.main};
  border-radius: 0px 20px 20px 20px;
  margin: 10px 15px;
`

export const BugSelection = styled.div`
  background: ${props => props.theme.main};
  color: black;
`
