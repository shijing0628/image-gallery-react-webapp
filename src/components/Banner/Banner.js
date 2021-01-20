import React from 'react';
import styled, { css } from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const HeroSection = styled.section`
height:100vh;
max-height:1100px;
position:relative;
overflow:hidden;
`;
const HeroWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`;
const HeroSlide = styled.div`
z-index:1;
width:100%;
height:100%;
`;
const HeroSlider = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`;
const HeroImage = styled.div`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit:cover;
`;
const HeroContent = styled.div`

`;
const MyButton = styled.div`
background-color:#50248F;
padding:15px 15px;
color:#fff;
max-width:150px;
text-align:center;
`;
const Arrow = styled(IoMdArrowRoundForward)``;
const SliderButtons = styled.div`
position:absolute;
bottom:120px;
right:50px;
display:flex;
z-index:10;
`;
const ArrowButtons = css`
width:50px;
height:50px;
color:#fff;
cursor:pointer;
background:#000d1a;
border-radius:50px;
padding:10px;
margin-right:1rem;
user-select:none;
transition:0.3s;

&:hover {
 background:#cd853f;
 transform:scale(1.05);
}
`;
const PrevArrow = styled(IoArrowBack)`${ArrowButtons}`;
const NextArrow = styled(IoArrowForward)`${ArrowButtons}`;



function Banner({ slides }) {
 return (
  <HeroSection>
   <HeroWrapper>
    {slides.map((slide, index) => (
     <HeroSlide key={index}>
      <HeroSlider>
       <HeroImage src={slide.image} alt={slide.alt} />
       <HeroContent>
        <h1>{slide.title}</h1>
        <MyButton to={slide.path} primary='true' >
         {slide.label}
         <Arrow />
        </MyButton>
       </HeroContent>
      </HeroSlider>
     </HeroSlide>
    ))}
    <SliderButtons>
     <PrevArrow />
     <NextArrow />
    </SliderButtons>
   </HeroWrapper>
  </HeroSection>
 )
}

export default Banner;
