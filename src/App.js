import React from 'react'
import OurWork from './component/OurWork'
import OurCleints from './component/OurCleints'
import Agencies from './component/Agencies'
import StrengthSection from './component/OurStrenth'
import TeamSection from './component/Team'
import ContactSection from './component/Contact'

const App = () => {
  return (
    <div>
        <OurWork />
        <OurCleints />
        <Agencies />
        <StrengthSection />
        <TeamSection />
        <ContactSection />
    </div>
  )
}

export default App