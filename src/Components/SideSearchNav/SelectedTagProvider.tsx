import React, { createContext, useState } from 'react'


type selectedTagContextType = {
    selectedTag: string,
    setSelectedTag: React.Dispatch<React.SetStateAction<string>>
  }
  
const selectedTagContext = createContext<selectedTagContextType>(
    {
        selectedTag: "",
        setSelectedTag: () => ""
    }
);

export const SelectedTagProvider = ({children}: {children: React.ReactNode}) => {
    const [selectedTag, setSelectedTag] = useState("")

    return (
        <selectedTagContext.Provider 
         value={{
                selectedTag: selectedTag, 
                setSelectedTag: setSelectedTag
            }}
        >
            {children}
        </selectedTagContext.Provider>
    )
}

export const useSelectedTag = () => {
    const context = React.useContext(selectedTagContext)
    if (context === undefined) {
      throw new Error('useSelectedTag must be used within a SelectedTagProvider')
    }
    return context
}
