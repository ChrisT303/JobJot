import React from 'react'
import JobJotLogo from '../assets/images/JobJotLogo.svg'
import mainImg from '../assets/images/mainLandingPageImg.svg'


const LandingPage = () => {
  return (
    <main>LandingPage
        <nav>
         <img src={JobJotLogo} alt="JobJot Logo" className='logo'/>
        </nav>
    </main>
  )
}

export default LandingPage