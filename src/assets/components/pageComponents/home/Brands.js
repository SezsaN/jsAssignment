import React from 'react'
import PaperzLogo from '../../../images/paperz-logo.png'
import DorfusLogo from '../../../images/dorfus-logo.png'
import MartinoLogo from '../../../images/martino-logo.png'
import SquareLogo from '../../../images/square-logo.png'
import GobonaLogo from '../../../images/gobona-logo.png'

const Brands = () => {
  return (
    <>
    <section className="brands">
         <div className="brand-row">
            <div className="content">
                <img src={PaperzLogo} alt="paperz logotype" />
                <img src={DorfusLogo} alt="dorfus logotype" />
                <img src={MartinoLogo} alt="martino logotype" />
                <img src={SquareLogo} alt="square logotype" />
                <img src={GobonaLogo} alt="gobona logotype" />
            </div>
        </div>

    </section> 
    </>
  )
}

export default Brands