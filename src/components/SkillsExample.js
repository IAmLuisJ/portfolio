import React from "react";
import styled from 'styled-components';

const SkillsExample = () => {
    return (
    <DivWrapper>
    <Text>Technical Tools by Example</Text>
    <Text2> Click the links to see a project I've built using that particular technology</Text2>
    <DivWrapper2>
        <ProjectContainer>
                <Text2>Java</Text2>
                <Text3>I really like writing Java, I've used it to write <a href="https://github.com/IAmLuisJ/CommandPrompt/blob/master/CommandPromptZip.java">command line tools</a>, <a href="https://github.com/IAmLuisJ/DrawingProgram/blob/master/src/DrawingProgram.java">desktop applications</a>, <a href="https://github.com/IAmLuisJ/HangManGame">games</a>, and <a href="https://github.com/IAmLuisJ/AndroidSpanishtoEnglishDictionary">android apps</a> </Text3>
        </ProjectContainer>
       <ProjectContainer>
                <Text2>JavaScript</Text2>
                <Text3>The language powering almost everything these days. I created an interactive tool that generates <a href="https://github.com/IAmLuisJ/CSVGeneratorTool/blob/main/InvoiceToolPortable.html">CSV files based on a table.</a> </Text3>
        </ProjectContainer>
       <ProjectContainer>
                <Text2>PHP</Text2>
                <Text3>Fun fact, this website was built using PHP. I've also created a <a href="https://www.justsaysky.com/cardGame/">Web App Game,</a> great for parties!</Text3>
        </ProjectContainer>
       <ProjectContainer>
                <Text2>React</Text2>
                <Text3>The hottest JS framework around, and for good reason. My last <a href="https://iamluisj.netlify.app/">portfolio website</a> was written in React.</Text3>
        </ProjectContainer>
       <ProjectContainer>
                <Text2>Swift/SwiftUI</Text2>
                <Text3>I'm building a food finding iOS app called <a href="https://github.com/IAmLuisJ/Grumbl">Grumbl</a>, open source and in public. I'm working on a companion app called <a href="https://github.com/IAmLuisJ/GrumbleOrder">Grumbl Order</a> which is written in SwiftUI.</Text3>
        </ProjectContainer>
       <ProjectContainer>
                <Text2>React Native</Text2>
                <Text3>I'm currently building <a href="https://github.com/IAmLuisJ/Photospot">PhotoSpots</a> with React Native, open source and in public. </Text3>
        </ProjectContainer>
       <ProjectContainer>
                <Text2>C++</Text2>
                <Text3>Great for low level programming. I built my first game with C++, a playable version of the <a href="https://github.com/IAmLuisJ/FoxFarmerChickenGrainGame">Fox, Farmer, Chicken riddle.</a></Text3>
        </ProjectContainer>
       <ProjectContainer>
                <Text2>MySQL/MongoDB</Text2>
                <Text3>I've worked with both relational databases (MySQL) and NoSQL databases (MongoDB) for the backend of my projects.</Text3>
        </ProjectContainer>
    </DivWrapper2>
</DivWrapper>)
}

const DivWrapper = styled.div `
    min-height: 90vh;
    margin-left: 15vh; 
    margin-right: 15vh;
    text-align: center;

@media (max-width: 768px){
    margin: 0 5rem 5rem 5rem;
    }  

@media (max-width: 480px){
    margin-left: 5vh; 
    margin-right: 3vh;
    margin-top: 28rem;
    }  
`

const DivWrapper2 = styled.div `
    min-height: 90vh;
    margin-left: 15vh; 
    margin-right: 15vh;
    text-align: center;
    display: grid;

@media (max-width: 768px){
    margin: 0 5rem 5rem 5rem;
    }  

@media (max-width: 480px){
    margin-left: 5vh; 
    margin-right: 3vh;
    margin-top: 28rem;
    }  
`

const Text = styled.h2`
    margin-bottom: 10vh; 
    /* font-size: 5rem; */
    font-weight: 900;
    color: whitesmoke;
    text-align: center;

@media (max-width: 768px){
    margin-top: 1rem;  
    margin-bottom: 10vh; 
    }
@media (max-width: 480px){
    margin-top: 2vh;
    margin-bottom: 7vh;
    font-size: 3.5rem;
    } 
`

const Text2 = styled.h4`
    margin-bottom: 10vh; 
    font-size: 1.5rem;
    font-weight: 900;
    color: whitesmoke;
    text-align: center;

@media (max-width: 768px){
    margin-top: 1rem;  
    margin-bottom: 10vh; 
    }
@media (max-width: 480px){
    margin-top: 2vh;
    margin-bottom: 7vh;
    font-size: 3.5rem;
    } `

const ProjectContainer = styled.div`
    display: grid;
    background-color: rgba(255, 0, 25, 0.5);
    
    border-radius: 2em;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    justify-content: center;
    margin: 4rem;
    padding: 2em;
    @media (max-width: 768px){
        grid-template-columns: auto;
        margin: 2rem;
    }
`
const Text3 = styled.p`
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: whitesmoke;
    text-align: center;

@media (max-width: 768px){
    padding: 2rem;
    } 
@media (max-width: 480px){
    padding: 3rem 1rem 2rem;
    
    }
`

export default SkillsExample;