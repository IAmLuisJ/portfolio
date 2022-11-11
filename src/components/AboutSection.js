import React from 'react';
import headshot from '../assets/headshot.jpeg';
import styled, { keyframes } from 'styled-components';
import Curly from './Curly' 
import Resume from './Resume'
import AOS from 'aos';
import Connect from './Connect';
import 'aos/dist/aos.css';


const AboutSection = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            <div  
                >
                <StyledAbout>
                    <div className = "description" id="about" >
                        <div className = "title">
                        <BigText >
                        <HI data-aos="fade-right">Hello!</HI>
                            <h2 data-aos="fade-right" data-aos-delay="100"> My name is <StyledA data-aos="fade-right" data-aos-delay="100">Luis</StyledA>
                            </h2>
                        </BigText>
                        <BigText data-aos="fade-right" data-aos-delay="300">
                            <h2 ><span>and I'm a</span></h2>
                        </BigText>
                        <BigText data-aos="fade-right" data-aos-delay="500">
                            <H2 ><TitleStyles><span>Full Stack Software Developer.</span></TitleStyles></H2>
                        </BigText>
                    </div>
                        <p data-aos="fade-up" >I'm a developer, musician, and creator. I work as a Senior Analyst in the world of Services.
                        </p>
                    <Resume />
                </div>
                <div  className = "image">
                    <Img data-aos="fade-left"
                        src = {headshot} 
                        alt = "Luis"/>
                         <Connect />
                </div>
            </StyledAbout>
            <Curly/>
            </div>
        </>
    );
};

const StyledAbout = styled.div`
    height: 95vh;
    margin-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 8rem;
    color: whitesmoke;
    margin-bottom: 10vh;
    
@media (max-width: 768px) {
    height: 45vh;
    display: block;
    text-align: center; 
    padding: 3rem;
    margin-top: 11rem;
    }
    
@media (max-width: 480px){
    padding: 1rem;
    text-align: center;
    margin-top: 9rem;
    
    } 
`
const HI = styled.h2 `
    font-weight: 900;
    font-size: 3.5rem;
    color: #8D99AE; 
    font-family: 'Lato', sans-serif;
`
const p = styled.p`
    margin-top: 1.5rem;
    font-weight: 300;
    padding-right: 8rem;
    font-family: 'Montserrat', sans-serif;

@media (max-width: 768px){
    padding: 2rem;
    } 
@media (max-width: 480px){
    padding: 3rem 1rem 2rem;
    
    }
`
const H2 = styled.h2`
    font-weight: 900;
    color: #8D99AE;
    font-family: 'Lato', sans-serif;
`
const StyledA = styled.a `
    color: #EDF2F4;
    shadow: 1px 3px 32px -4px black;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
`
const Img = styled.img`
    width: 40vh;
    height: 40vh;
    margin-right: 5rem;
    position: relative;
    border-radius: 50%; 
    overflow: hidden;
    object-fit: cover;
    box-shadow: 1px 3px 32px -4px black;
    @media (max-width: 1024px){
        width: 20vh;
        height: 20vh;
    } 
@media (max-width: 768px){
    display: none;
    } 
@media (max-width: 480px){
    display: none; 
    }
`
const BigText = styled.div `
    /* overflow: hidden; */
    text-shadow: 0  15px 7px #2B2D42; 
`

const change = keyframes`
@keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
  }
  `

  const TitleStyles = styled.div `
    overflow: hidden;
    line-height: 40px;
    animation: ${change} 10s linear infinite;
`

export default AboutSection;

