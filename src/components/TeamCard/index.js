// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCard} = props
  const {id, name, teamImageUrl} = teamCard

  return (
    <Link to={`/team-matches/${id}`} className="nav-link-home-item">
      <li className="teams-card">
        <img src={teamImageUrl} alt={name} className="team-image-url" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
