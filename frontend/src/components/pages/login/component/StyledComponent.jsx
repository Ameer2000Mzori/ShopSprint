import styled from 'styled-components'

export const StyledFormWrap = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5px;
`
export const StyledForm = styled.form`
  background-color: #021431;
  min-height: 275px;
  max-height: 850px;
  width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 15px;
  padding: 15px;
`

export const StyledLabelInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
  width: 250px;
`

export const StyledLabelInput = styled.label`
  color: #fff;
  font-size: 20px;
`

export const StyledButton = styled.button`
  width: 150px;
  height: 35px;
  border-radius: 5px;
  background-color: #821431;
  color: #fff;
  transition: all 500ms ease-in-out;

  &:hover {
    background-color: #fff;
    color: #021431;
  }
`
