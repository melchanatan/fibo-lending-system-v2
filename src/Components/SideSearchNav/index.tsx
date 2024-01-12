import React, { createContext, useState } from 'react'
import RecommendTagContainer from './RecommendTagContainer'
import {SelectedTagProvider} from './SelectedTagProvider'
import SearchBar from './SearchBar'


const SideSearchNav = () => {
  const tagNameList = ["Controller", "Supply", "Actuator", "Sensor", "Mechanic"]


  return (
    <>

      <SelectedTagProvider>
        <SearchBar />
        <RecommendTagContainer tagNames={tagNameList}/>
      </SelectedTagProvider>
    </>
  )
}

export default SideSearchNav