import styled from 'styled-components';
import background from '../../images/login-bg.jpg';

export const colors = {
 primary: '#fff',
 theme: '#50248F',
 light1: '#f3f4f6',
 light2: '#e5e7eb',
 dark1: '#1f2937',
 dark2: '#4b5563',
 dark3: '#9ca3af',
 red: '#ED6347'
}

// components
export const StyledContainer = styled.div`
margin:0;
min-height:100vh;
display:flex;
justify-content:center;
align-item:center;
background:linear-gradient(0deg,rgba(0,0,0,.2),rgba(0,0,0,.3)), url(${background});
background-size:cover;
background-attachment:fixed;
`;

//input field
export const StyledTextInput = styled.input`
width:280px;
padding:15px;
padding-left:50px;
font-size:16px;
letting-spacing:1px;
color:${colors.light2};
border:0;
display:block;
margin:5px auto 10px auto;
transition:ease-in-out 0.3s;

${props => props.invalid && `background-color:${colors.red}; color:${colors.primary};`}

&:focus {
 background-color: ${colors.dark2};
 color:${colors.primary};
}
`;


export const StyledLabel = styled.p`
text-align:left;
font-size:14px;
font-weight:bold;
`;

export const StyledFormArea = styled.div`
background-color:${props => props.bg || colors.primary};
text-align:center;
padding:45px 55px;
margin-top:100px;
margin-bottom:100px;
width:30%;
`;

export const StyledFormButton = styled.button`
padding:10px;
width:150px;
background-color:transparent;
font-size:16px;
border:2px solid ${colors.theme};
border-radius:10px;
color:${colors.theme};
text-align:center;
transition:ease-in-out 0.5s;

&:hover{
 background-color:${colors.theme};
 color:${colors.primary};
 cursor:pointer;
}
`;