import React from 'react'

const JobInfo = ({icon, text}) => {
  return (
    <div className='info-wrapper'>
      <span className='info-icon'>{icon}</span>
      <span className='info-text'>{text}</span>
    </div>
  )
}

export default JobInfo
