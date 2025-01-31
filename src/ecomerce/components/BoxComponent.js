import React from 'react'

export const BoxComponent = ({headText, description, iconClass}) => {
  return (
    <div className="box common">
        <div style={{textAlign:'center', paddingTop:'10px'}}><i class={iconClass}></i></div>
        <h2>{headText}</h2>
        <p>{description}</p>
        <div className='button-cont'><a href=""><button>Learn more</button></a></div>
    </div>
  )
}
