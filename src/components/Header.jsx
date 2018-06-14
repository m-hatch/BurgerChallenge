import React from 'react'

/* 
 * @props title {string}
 * @props subtitle {string}
 * @props url {string}
 */
export default (props) => {

  // we are just going to hard-code the values for this example
  const url = 'https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1405452555/nfqkd2f6t8bc5uc8du6g.png'
  const title = 'Artivest Burgers'
  const subtitle = 'Find and create your own burgers.'

  return (
    <div className="header">

      <div className="header__logo">
        <img className="header__img" src={ url } />
      </div>

      <h1 className="header__title">{ title }</h1>
      <h2 className="header__subtitle">{ subtitle }</h2>

    </div>
  )

}