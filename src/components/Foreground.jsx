import React, { useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion"

function Foreground() {

const ref = useRef(null);

const data = [
    {
        desc: "This is the background color of the card that will be deployed.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },

    {
        desc: "This is the background color of the card that will be deployed.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    
    {
        desc: "This is the background color of the card that will be deployed.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue"},
    },
]

    
  return (
    
      <div ref={ref} className='fixed z-[3] top-0 left-0  w-full h-full flex gap-5 flex-wrap p-5'>
        {data.map((item, index)=>( 
            <Card data={item}  reference={ref} />
        ))}


      </div>
    
  )
}

export default Foreground
