// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: {}, isLoading: true, ids: ''}

  componentDidMount() {
    this.getDifferentTeamMatches()
  }

  getDifferentTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({ids: id})
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const dataTwo = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = dataTwo
    // console.log(recentMatches)
    const newLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const newRecentMatches = recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    const updatedData = {teamBannerUrl, newLatestMatchDetails, newRecentMatches}
    this.setState({matchDetails: updatedData, isLoading: false})
  }

  render() {
    const {matchDetails, isLoading, ids} = this.state
    const {
      teamBannerUrl,
      newLatestMatchDetails,
      newRecentMatches,
    } = matchDetails

    return (
      <div className={`${ids}`}>
        {isLoading ? (
          <div data-testid="loader" className={`${ids}-loader`}>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner-image"
            />
            <p className="latest-matches">Latest Matches</p>
            <div>
              <LatestMatch newLatestMatchDetails={newLatestMatchDetails} />
            </div>
            <ul className="ul-list">
              {newRecentMatches.map(eachItem => (
                <MatchCard matchCards={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
