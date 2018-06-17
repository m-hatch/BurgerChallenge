import React from 'react'

const date = new Date()

export default (props) => {
  return (
    <div className="footer">
      &copy; { date.getFullYear() } Artivest Burgers
    </div>
  )
}
