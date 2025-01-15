import React from 'react'
import HomeBanner from '../../Conponents/HomeBanner'
import bannerImage from '../../assets/images/banner.jpg'

const Home = () => {
  return (
    <>
        <HomeBanner/>
        <section className='homeProducts'>
          <div className='container'>
              <div className='row'>
                  <div className='col-md-3'>
                    <div className='banner'><img src={bannerImage} alt="error" /></div>
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
