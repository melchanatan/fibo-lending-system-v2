import React, { createContext, useState } from 'react'
import TagContainer from './TagContainer'
import {SelectedTagProvider} from './SelectedTagProvider'


const SideSearchNav = () => {
  const tagNameList = ["Controller", "Supply", "Actuator", "Sensor", "Mechanic"]


  return (
    <SelectedTagProvider>
      <TagContainer tagNames={tagNameList}/>
    </SelectedTagProvider>
  )
}

export default SideSearchNav