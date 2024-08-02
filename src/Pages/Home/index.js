import React from 'react'
import HomeBanner from '../../Conponents/HomeBanner'

const Home = () => {
  return (
    <>
        <HomeBanner/>
        <section className='homeProducts'>
          <div className='container'>
              <div className='row'>
                  <div className='col-md-3'>
                    <div className='banner'><img src="https://fullstack-ecommerce.netlify.app/static/media/banner1.957b2952d2e9b8c1f445.jpg" alt="" /></div>
                  </div>
                  <div className='col-md-3'>
                       
                  </div>
              </div>
          </div>
        </section>
    </>
  )
}

export default Home
