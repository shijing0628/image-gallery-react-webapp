import React from 'react';
import { StyledContainer, StyledButton, ButtonGroup, StyledFormArea, colors } from './style.js';





function DashboardTable() {
 return (
  <>
   <StyledContainer style={{ position: 'relative' }}>
    <StyledFormArea>
     <ButtonGroup>
      <StyledButton to='/'>
       Logout
      </StyledButton>
     </ButtonGroup>
    </StyledFormArea>
   </StyledContainer>
  </>
 )
}

export default DashboardTable
