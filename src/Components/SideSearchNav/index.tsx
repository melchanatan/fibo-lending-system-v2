import React, { createContext, useState } from 'react'
import RecommendTagContainer from './RecommendTagContainer'
import {SelectedTagProvider} from './SelectedTagProvider'
import SearchBar from './SearchBar'
import AnnoucementCard from './AnnoucementCard'


const SideSearchNav = ({className}: {className?: string}) => {
  const tagNameList = ["Controller", "Supply", "Actuator", "Sensor", "Mechanic"]


  return (
    <nav className={className}>
      <AnnoucementCard />
      <SelectedTagProvider>
        <SearchBar />
        <RecommendTagContainer tagNames={tagNameList} containerName='Tags'/>
      </SelectedTagProvider>
    </nav>
  )
}

export default SideSearchNav