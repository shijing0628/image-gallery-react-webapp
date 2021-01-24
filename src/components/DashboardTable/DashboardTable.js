import React from 'react';
import { StyledContainer, StyledButton, ButtonGroup, StyledFormArea, colors } from './style.js';

import { useEffect } from 'react';
import { sessionService } from 'redux-react-session'
import axios from 'axios';




function DashboardTable() {

 useEffect(() => {
  async function fetchData() {
   let a = await sessionService.loadSession();
   console.log(a)
  }
  fetchData()
 }, [])

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
