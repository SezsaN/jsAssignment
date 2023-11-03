import React from 'react'
import TeamKristine from '../../../images/team-kristine.png'
import TeamMark from '../../../images/team-mark.png'
import TeamKimberly from '../../../images/team-kimberly.png'
import TeamJustin from '../../../images/team-justin.png'

const MeetOurTeam = () => {
  return (
    <>
        <section className="meet-our-team">
            <div className="container">
                <div className="section-title">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members
                        <a class ="btn-browse-team" href="#">Browse Team <i className="fa-regular fa-arrow-up-right"></i></a>
                    </h2>        
                </div>
                <div className="members">
                    <div>
                        <img src={TeamKristine} alt="Kristine Palmer, team member of crito" />
                        <h3>Kristine Palmer</h3>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div>
                        <img src={TeamMark} alt="Kristine Palmer, team member of crito" />
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div>
                        <img src={TeamKimberly} alt="Kristine Palmer, team member of crito" />
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div>
                        <img src={TeamJustin} alt="Kristine Palmer, team member of crito" />
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
                <div>
                    <a className="dots" href="#">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </a>
                </div>
            </div>    
        </section>
    </>
  )
}

export default MeetOurTeam