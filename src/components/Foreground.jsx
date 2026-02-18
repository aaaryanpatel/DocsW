import React from 'react'
import Card from './Card'

function Foreground() {
const data = [
    {
        desc: "This is the background color of the card that will be deployed.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },

]

    
  return (
    
      <div className='fixed z-[3] top-0 left-0  w-full h-full flex '>
        {data.map((item, index)=>( 
            <Card data={item} />
        ))}


      </div>
    
  )
}

export default Foreground
