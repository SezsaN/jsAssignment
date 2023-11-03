import React from 'react'
import ClientCassandra from '../../../images/client-cassandra.png'
import ClientAmanda from '../../../images/client-amanda.png'
import ClientJack from '../../../images/client-jack.png'
import Button from '../../baseComponents/Button'


const OurClients = () => {
  return (
    <>
        <section className="our-clients">
            <div className="container">
                    <div className="box"></div>
                    <div className="section-title">
                        <p>Testimonial</p>
                        <h2>What Our Clients Says</h2>
                    </div>
                    <div className="client-reactions">
                        <div>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <h3>Cassandra Warren</h3>
                            <p className="positions">Business Manager, Dorfus</p>
                            <img src={ClientCassandra} alt="Cassandra Warren client of Dorfus" />
                        </div>    
                        <div>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <h3>Amanda Tulling</h3>
                            <p className="positions">Senior Developer, Square</p>
                            <img src={ClientAmanda} alt="Amanda Tulling client of Square" />
                        </div>
                        <div>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <h3>Jack McDogglas</h3>
                            <p className="positions">Key Account Manager, Gobona</p>
                            <img src={ClientJack} alt="Jack McDogglas client of Gobona" />
                        </div>
                    </div>
                    <div className="center-content">
                        <Button type="black" title="All Reviews" url="/reviews" />
                    </div>
                </div>
        </section>
    </>
  )
}

export default OurClients
            