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
                    <div className='banner'>
                      <img src={bannerImage} alt="error" className='cursor'/></div>
                    </div>

                  <div className='col-md-3'>
                    <div className='d-flex align-items-center'>
                      <div className='info'>
                        <h3>BEST SELLER</h3>
                        <p className='text-light text-sml'>Do not miss the current offer</p>

                      </div>

                    </div>
                       
                  </div>
              </div>
          </div>
        </section>
    </>
  )
}

export default Home
