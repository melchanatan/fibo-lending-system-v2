import React, { createContext, useState } from 'react'
import { TagType } from './tag.type';


type selectedTagContextType = {
    selectedTag: TagType,
    setSelectedTag: React.Dispatch<React.SetStateAction<any>>
}

const initalContext = {
    selectedTag: {label: "", color: "#000"},
    setSelectedTag: () => ""
};

const selectedTagContext = createContext<selectedTagContextType>(
    {
        selectedTag: {label: "", color: "#000"},
        setSelectedTag: () => ""
    }
);

export const SelectedTagProvider = ({children}: {children: React.ReactNode}) => {
    const [selectedTag, setSelectedTag] = useState({label: "", color: "#000"})

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
