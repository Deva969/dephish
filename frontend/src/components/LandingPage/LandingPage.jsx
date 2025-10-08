

import './LandingPage.css'
import Navbar from './Navbar'
import Background from './Background'
import hackImage from './../../assets/hack.png'
import robotImage from './../../assets/robot-landing-page.png'
import Fish from './../../components/LandingPage/Fish'

function LandingPage()
{
    return (
        <>
        <Fish></Fish>
        <Background>
        <Navbar></Navbar>
        <img src={hackImage} alt="cant show hackimage" className="looper" />
        <img src={robotImage} alt="cant show robotimage" className="kyros"/>
        </Background>
        </>
    )
}

export default LandingPage