import React from 'react'
import HomeStyle from './Home.module.css'
import { Link } from 'react-router-dom'
import Products from '../../component/Products/Products'

function Home() {
  return (
    
    <div>
        <div className={HomeStyle.homepage}>
            <div className={HomeStyle.HeaderContainer}>
                <p className={HomeStyle.wellcome}>Welcome to</p>
                <h1>Family Bakery</h1>
                <p className={HomeStyle.para}>We're the biggest, best equipped and most advanced Bakery in the greater<br/>Los Angeles area.</p>
                <div className={HomeStyle.buttons}>
                    <Link className={HomeStyle.learnmore}>Learn More</Link>
                    <Link className={HomeStyle.contactus}>Contact Us</Link>
                </div>
            </div>
        </div>
      <Products/>
    </div>
  )
}

export default Home