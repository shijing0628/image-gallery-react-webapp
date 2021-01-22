import React from 'react'
import { StyledContainer, StyledFormArea, StyledFormButton, colors, ExtraText, TextLink, CopyrightText } from './style.js';
import Logo from '../../images/logo.png';
import { Avatar, Styledtitle } from '../RegisterUser/style';
import { ButtonGroup } from '@material-ui/core';
import { TextInput } from '../FormLib/FormLib'
//import formik
import { Formik, Form } from 'formik';


//icons
import { FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';


function LoginUser() {
 return (
  <div >
   <StyledContainer style={{ position: 'relative' }}>
    <StyledFormArea style={{ backgroundColor: "#E3D0FF" }}>
     <Avatar image={Logo} style={{ width: '80px', height: '80px' }} />
     <Styledtitle size={30} color={colors.theme}>
      Member Login
     </Styledtitle>
     <Formik
      initialValues={{
       email: '',
       password: '',
      }}
      validationSchema={
       Yup.object({
        email: Yup.string().email('Invalid email adrress').required('Required'),
        password: Yup.string().min(8, 'Password is too short').max(30, 'Password is too long').required('Required')
       })
      }
      onSubmit={(values, { setSubmitting }) => {
       console.log(values)
      }}
     >
      {() => (
       <Form>
        <TextInput
         name='email'
         type='text'
         label='Email address'
         placeholder='abc@gmail.com'
         icon={<FiMail />}
        />
        <TextInput
         name='password'
         type='password'
         label='Password'
         placeholder='********'
         icon={<FiLock />}
        />
        <br></br>
        <ButtonGroup>
         <StyledFormButton type='submit'>
          Login
         </StyledFormButton>
        </ButtonGroup>
       </Form>
      )}
     </Formik>
     {/* signup link */}
     <br></br>
     <ExtraText>
      Create a new account ?
      <TextLink to='/user'
      >  Sign Up
       </TextLink>
     </ExtraText>
     <br></br><br></br>
     <CopyrightText>
      All rights reserved &copy;2021
    </CopyrightText>
    </StyledFormArea>

   </StyledContainer>
  </div>
 )
}

export default LoginUser
