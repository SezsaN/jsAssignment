import React from 'react'
import TeamKristine from '../../../images/team-kristine.png'
import TeamMark from '../../../images/team-mark.png'
import TeamKimberly from '../../../images/team-kimberly.png'
import TeamJustin from '../../../images/team-justin.png'
import Button from '../../baseComponents/Button'
import MeetOurTeamBox from '../../baseComponents/MeetOurTeamBox'
import Dots from '../../baseComponents/Dots'

const ourTeams = [
    { image: TeamKristine, alt: "Kristine Palmer, team member of crito", title: "Kristine Palmer", description: "Chef Operation Officer" },
    { image: TeamMark, alt: "Mark Aubri, team member of crito", title: "Mark Aubri", description: "Senior Consultant" },
    { image: TeamKimberly, alt: "Kimberly Hansen member of crito", title: "Kimberly Hansen", description: "Senior Consultant" },
    { image: TeamJustin, alt: "Justin Willoman, team member of crito", title: "Justin Willoman", description: "Senior Tech Consultant"}
]

const MeetOurTeam = () => {
  return (
    <>
        <section className="meet-our-team">
            <div className="container">
                <div className="section-title">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members
                        <Button type="team" title="Browse Team" url="/ourteam" />
                    </h2>        
                </div>
                <div className="members">
                    {
                        ourTeams.map((team, index) => (
                            <MeetOurTeamBox key={index} image={team.image} alt={team.alt} title={team.title} description={team.description} />
                        ))
                    }
                </div>
                <div>
                    <Dots />
                </div>
            </div>    
        </section>
    </>
  )
}

export default MeetOurTeam