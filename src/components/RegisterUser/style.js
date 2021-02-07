import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../images/login-bg.jpg';

export const colors = {
 primary: '#fff',
 theme: '#50248F',
 light1: '#f3f4f6',
 light2: '#e5e7eb',
 dark1: '#1f2937',
 dark2: '#4b5563',
 dark3: '#9ca3af',
 red: '#F49342'
}

// components
export const StyledContainer = styled.div`
margin:0;
min-height:100vh;
display:flex;
justify-content:center;
align-item:center;
background-size:cover;
background-attachment:fixed;
flex-direction:column;
`;

export const Styledtitle = styled.h2`
 font-size:${(props) => props.size}px;
 text-align:center;
 color:#50248F;
 padding:5px;
 margin-bottom:20px;
`;

export const StyledSubTitle = styled.p`
font-size:${(props) => props.size}px;
 text-align:center;
 color:${(props) => props.color ? props.color : colors.primary};
 padding:5px;
 margin-bottom:25px;
`;

export const Avatar = styled.div`
width:180px;
height:180px;
border-radius:50px;
background-image:url(${props => props.image});
background-size:cover;
background-position:center;
margin:auto;
`;

export const StyledButton = styled(Link)`
padding:10px;
width:150px;
background-color:transparent;
font-size:16px;
border:2px solid tomato;
border-radius:10px;
color:purple;
text-decoration:none;
text-align:center;
transition:ease-in-out 0.5s;
outline:0;


&:hover{
 background-color:${colors.primary};
 color:${colors.theme};
 cursor:pointer;
}
`;

export const ButtonGroup = styled.div`
display:flex;
justify-content:space-around;
flex-direction:row;
margin-top:25px;
flex-wrap:wrap;
`;