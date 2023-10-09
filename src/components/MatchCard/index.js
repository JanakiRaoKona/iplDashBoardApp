// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCards} = props

  const {competingTeamLogo, competingTeam, result, matchStatus} = matchCards
  const className = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card-cont">
      <img
        className="team-logo-sem"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-name-sem">{competingTeam}</p>
      <p className="team-name-sem1">{result}</p>
      <p className={className}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
