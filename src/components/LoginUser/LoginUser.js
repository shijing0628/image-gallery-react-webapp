import React from 'react'
import { StyledContainer, StyledTextInput, StyledLabel, StyledFormArea, StyledFormButton, colors } from './style.js';
import Logo from '../../images/logo.png';
import { Avatar, Styledtitle } from '../RegisterUser/style';
//import formik


function LoginUser() {
 return (
  <>
   <StyledContainer>
    <StyledFormArea>
     <Avatar image={Logo} style={{ width: '80px', height: '80px' }} />
     <Styledtitle size={30} color={colors.theme}>
      Member Login
     </Styledtitle>
    </StyledFormArea>
   </StyledContainer>
  </>
 )
}

export default LoginUser
