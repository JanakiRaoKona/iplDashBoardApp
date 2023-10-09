// Write your code here
import './index.css'

const LatestMatch = props => {
  const {newLatestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = newLatestMatchDetails
  return (
    <div className="container-team">
      <div className="container-row-team">
        <div>
          <p className="comp-team">{competingTeam}</p>

          <p className="latest">{date}</p>
          <p className="latest">{venue}</p>
          <p className="latest">{result}</p>
        </div>
        <div>
          <img
            className="team-logo-image"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <hr className="hr-line" />
      <div className="second-cont">
        <p className="comp-team1">First Innings</p>
        <p className="latest">{firstInnings}</p>
        <p className="comp-team1">Second Innings</p>
        <p className="latest">{secondInnings}</p>
        <p className="comp-team1">Man Of The Match</p>
        <p className="latest">{manOfTheMatch}</p>
        <p className="comp-team1">Umpires</p>
        <p className="latest">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
