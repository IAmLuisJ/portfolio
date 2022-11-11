import styled from 'styled-components';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';



const Connect = () => {
    return (
        <>
            <Icons>
                
                    <Link 
                        to = {{pathname:"https://github.com/iAmLuisJ"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FaGithub className='icon' title='github'/>
                    </Link>
                    
                    {/* <Link 
                        to = {{pathname: "https://www.twitter.com/HelloLuisJ"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FaTwitter className='icon' title='twitter'/>
                    </Link> */}
                    
                    <Link 
                        to = {{pathname: "https://www.linkedin.com/in/luis-juarez1"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FaLinkedin className='icon' title='linkedin'/>
                    </Link>

                    <Link 
                        to = {{pathname:"mailto:Luis@luisjuarez.tech"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer"> 
                            <FaEnvelope className='icon' title='email'/>  
                    </Link>
                    
                </Icons>
        </>
    );
};


const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin: 2rem 4rem;
    .icon {
        font-size: 2rem;
        color: whitesmoke;
        margin: 1.2rem;
        &:hover {
        color: #8D99AE;
        transition: all 0.7s ease;
        } 
    }
    
@media (max-width: 1502px){
    font-size: 1.2rem;
    margin-top: 5rem;
    } 
    
@media (max-width: 480px){
    font-size: 1.5rem;
    } 
`
export default Connect;