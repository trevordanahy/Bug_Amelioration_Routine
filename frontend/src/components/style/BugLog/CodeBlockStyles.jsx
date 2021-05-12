import styled from 'styled-components'

export const CodeDiv = styled.div`
  margin: 0px 10px 0px 10px;
  border-radius: 5px 5px 5px 25px;
  
`
export const CodePre = styled.pre`
  border-radius: 5px 5px 5px 5px;
`
export const Explanation = styled.div`
  font-size: 16px;
  margin: 15px 0px 3px 30px;
`
export const BugFixBttn = styled.button`
  margin: 0px 30px 10px 30px;
  width: 100%;
  border-radius: 5px 5px 5px 5px;
  background: #124D25; /*${props => props.theme.mainShade};*/
  color: ${props => props.theme.secondaryShade};
  font-size:18px;
  align-self: center;
`
