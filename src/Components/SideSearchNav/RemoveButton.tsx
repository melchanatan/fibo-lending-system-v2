import React from 'react'
import CloseIcon from './assets/CloseIcon'
import { useSelectedTag } from './SelectedTagProvider'

const RemoveButton = () => {
    const {selectedTag, setSelectedTag} = useSelectedTag();

    return (
        <a className='' onClick={() => setSelectedTag("")}>
            <CloseIcon className='fill-white scale-[.55]'/>
        </a>
    )
}

export default RemoveButton