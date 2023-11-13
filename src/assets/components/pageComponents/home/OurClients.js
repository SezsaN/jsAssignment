import React from 'react'
import ClientCassandra from '../../../images/client-cassandra.png'
import ClientAmanda from '../../../images/client-amanda.png'
import ClientJack from '../../../images/client-jack.png'
import Button from '../../baseComponents/Button'
import OurClientsBox from '../../baseComponents/OurClientsBox'


const ourClients = [
    { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", title: "Cassandra Warren", pos: "Business Manager, Dorfus", image: ClientCassandra, alt: "Cassandra Warren client of Dorfus" },
    { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", title: "Amanda Tulling", pos: "Senior Developer, Square", image: ClientAmanda, alt: "Amanda Tulling client of Square" },
    { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", title: "Jack McDogglas", pos: "Key Account Manager, Gobona", image: ClientJack, alt: "Jack McDogglas client of Gobona" }
    
]

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
                        {
                          ourClients.map((client, index) => (
                            <OurClientsBox key={index} description={client.description} title={client.title} pos={client.pos} image={client.image} alt={client.alt} />
                          ))
                        }
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
            