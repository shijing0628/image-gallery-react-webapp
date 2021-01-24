import React, { useState } from 'react';
import { StyledContainer, StyledButton, ButtonGroup, StyledFormArea, colors } from './style.js';

import { useEffect } from 'react';
import { sessionService } from 'redux-react-session'
import axios from 'axios';
import { useSelector } from 'react-redux'



function DashboardTable() {
 const authenticated = useSelector(store => store.session.authenticated);
 const [entriesData, setEntriesData] = useState([]);


 useEffect(() => {
  async function fetchData() {
   let token = await sessionService.loadSession();
   console.log(token)
   let { data: { entriesData } } = await axios.get('http://localhost:5000/contact_form/entries', {
    headers: {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`
    }
   })
   setEntriesData(entriesData)
  }
  fetchData()
 }, [])

 return (
  <>
   <StyledContainer style={{ position: 'relative' }}>
    <StyledFormArea>
     {
      authenticated ?
       <div>
        {entriesData && entriesData.map(entryData => (
         JSON.stringify(entryData)
        ))
        }
        < ButtonGroup >
         <StyledButton to='/'>
          Logout
       </StyledButton>
        </ButtonGroup>
       </div>
       : <h1>you need login</h1>
     }


    </StyledFormArea>
   </StyledContainer>
  </>
 )
}

export default DashboardTable;