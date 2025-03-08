import React from 'react'
import OurWork from './component/OurWork'
import OurCleints from './component/OurCleints'
import Agencies from './component/Agencies'
import StrengthSection from './component/OurStrenth'
import TeamSection from './component/Team'
import ContactSection from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
        <OurWork />
        <OurCleints />
        <Agencies />
        <StrengthSection />
        <TeamSection />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default App