import React from 'react'
import Custom from '../components/Custom';



const customlist = (props) => {
  return (
    <div>
      <Custom customname = {props.customtype} display={props.display}/>
    </div>
  )
}

export default customlist;