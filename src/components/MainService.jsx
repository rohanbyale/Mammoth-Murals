import React from 'react'
import ServiceHead from './ComponentSecond/ServiceHead'
import Approach from './Approach'
import CraftedSection from './ComponentSecond/CraftedSection'
import Services from './Services'
import ProcessSection from './ComponentSecond/ProcessSection'
const MainService = () => {
  return (
    <div>
       
        <ServiceHead />
        <CraftedSection />
        <Services />
        <ProcessSection />
         <Approach />
    </div>
  )
}

export default MainService