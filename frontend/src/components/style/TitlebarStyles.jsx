import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: auto;
  background: ${props => props.theme.main};
  border-bottom: 3px solid ${props => props.theme.mainShade};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 350px) {
    flex-flow: row wrap;
    justify-content: flex-end;
  }
`

export const PageTitle = styled.h1`
  margin: 15px;
  font-size: 2rem;
  color: ${props => props.theme.lightShade};
`

export const ThemeBttn = styled.button`
  background: ${props => props.theme.main};
  height: 2rem;
  width: auto;
  border-radius: 100%;
  margin: 0px 10px 10px 0px;
  border: none;
  
`
export const ThemeGraphic = styled.img`
  height: 2rem;
  width: auto;
  
`

export const ActionContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;


`
