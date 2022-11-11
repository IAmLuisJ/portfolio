import React from 'react';
import bootstrap from '../assets/bootstrap.svg';
import css from '../assets/css.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import html from '../assets/html.svg';
import js from '../assets/js.svg';
import swift from '../assets/swift.svg';
import php from '../assets/PHPElephpant.svg'
import react from '../assets/react.svg';
import terminal from '../assets/terminal.svg';
import vscode from '../assets/vscode.svg';
import styled from 'styled-components';
import java from '../assets/java.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SkillsSection = () => {
    AOS.init({
        duration: 1200,
    })

    return (
        <>
            <DivWrapper 
                id="skills" 
                >
                <H2>Skills and Tools</H2>
                {/* <SkillsExample /> */}
                <Icons data-aos="zoom-in">
                <div>
                    <img src={html} alt="html" />
                    <Text>HTML</Text>
                </div>
                <div>
                    <img src={css} alt="css" />
                    <Text>CSS</Text>
                </div>
                <div>
                    <img src={js} alt="js" />
                    <Text>JavaScript</Text>
                </div>
                <div>
                    <img src={bootstrap} alt="bootstrap" />
                    <Text>Bootstrap</Text>
                </div>
                <div>
                    <img src={java} alt="java" />
                    <Text>Java</Text>
                </div>
                <div>
                    <img src={react} alt="react" />
                    <Text>React</Text>
                </div>
                <div>
                    <img src={php} alt="php" />
                    <Text>PHP</Text>
                </div>
                <div>
                    <img src={swift} alt="swift" />
                    <Text>Swift</Text>
                </div>
                <div>
                    <img src={git} alt="git" />
                    <Text>Git</Text>
                </div>
                <div>
                    <img src={github} alt="github" />
                    <Text>GitHub</Text>
                </div>
                <div>
                    <img src={vscode} alt="vscode" />
                    <Text>VSCode</Text>
                </div>
                <div>
                    <img src={terminal} alt="terminal" />
                    <Text>Terminal</Text>
                </div>
                </Icons>
        </DivWrapper>
        </>
    );
};

const DivWrapper = styled.div `
    min-height: 50vh;
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
const Text = styled.h2`
    margin-bottom: 1vh; 
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

const H2 = styled.h2`
    font-weight: 900;
    color: whitesmoke;
    text-align: center;
    margin-bottom: 2em;
    margin-top: 6em;
@media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 5rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        margin-bottom: 7vh;
        font-size: 3.5rem;
    }  
`

const Icons = styled.div`
    height: 7vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1em; 
    row-gap: 3rem;
    justify-items: center;
    align-items: center;
    img {
        margin-top: 1vh;
        width: 5vw;
    }
        
@media (max-width: 768px){
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem; 
    row-gap: 4rem;
    img {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 14vw;
    } 
}
@media (max-width: 480px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem; 
    row-gap: 1rem;
    img {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 25vw;
    } 
}
`
export default SkillsSection;