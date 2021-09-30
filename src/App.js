
import './App.css';
import AnimatedMatchCard from "./components/Animated-Game-Stats-Card/LeagueMatchCard"

function App() {

 
  let cardData = [
    {
      playerName: 'Busters',
      matchType: "Ranked Solo",
      matchOutcome: "Victory",
      championIcon: 'Veigar',
      playerRank: 'Diamond I',
      summoners: ['Flash', 'Teleport'],
      runes: ['Electrocute', 'Sorcery'],
      lpChange: 24,
      kills: 22,
      deaths: 0,
      assists: 9,
      csCount: 384,
      goldCount: 18290,
      items: [1, 2, 3, 4, 5, 6],
      wardCount: 12,
      otherPlayers: ['SADE', 'DonnieTmain', 'Busters']
    },
    {
      playerName: 'Busters',
      matchType: "Ranked Flex",
      matchOutcome: "Defeat",
      championIcon: 'Veigar',
      playerRank: 'Gold III',
      summoners: ['Flash', 'Teleport'],
      runes: ['Electrocute', 'Sorcery'],
      lpChange: -15,
      kills: 22,
      deaths: 0,
      assists: 9,
      csCount: 384,
      goldCount: 7320,
      items: [1, 2, 3, 4, 5, 6],
      wardCount: 12,
      otherPlayers: ['SADE', 'DonnieTmain', 'Busters']
    },
    {
      playerName: 'Busters',
      matchType: "Ranked Flex",
      matchOutcome: "Defeat",
      championIcon: 'Veigar',
      playerRank: 'Gold III',
      summoners: ['Flash', 'Teleport'],
      runes: ['Electrocute', 'Sorcery'],
      lpChange: -12,
      kills: 22,
      deaths: 0,
      assists: 9,
      csCount: 384,
      goldCount: 7320,
      items: [1, 2, 3, 4, 5, 6],
      wardCount: 12,
      otherPlayers: ['SADE', 'DonnieTmain', 'Busters']
    },
    {
      playerName: 'Busters',
      matchType: "Ranked Flex",
      matchOutcome: "Victory",
      championIcon: 'Veigar',
      playerRank: 'Gold III',
      summoners: ['Flash', 'Teleport'],
      runes: ['Electrocute', 'Sorcery'],
      lpChange: 22,
      kills: 22,
      deaths: 0,
      assists: 9,
      csCount: 384,
      goldCount: 9510,
      items: [1, 2, 3, 4, 5, 6],
      wardCount: 12,
      otherPlayers: ['SADE', 'DonnieTmain', 'Busters']
    }
  ]
 
 






  return (
    <div className="App">
      <div className="nav-bar-container">NAV BAR</div>
      <div className="main-view-wrapper">
        <div className="main-view-container">
          <div className="player-view-header-container">
            <div className="player-image"></div>
            <div className="player-personal-info-container">
              <div className="player-name">Busters</div>
              <div className="player-ladder-position">Ladder Rank <span>44,312</span>(24.76%)</div>
              <button className="update-button">Update</button>
            </div>
           
          
          </div>



          <div className="player-information-container">
            <div className="player-rank-information">
              <div className="rank-icon"></div>
              <div className="rank-info-container">
                <div className="rank-category">Ranked Solo</div>
                <div className="player-rank">Master</div>
                <div className="current-lp-win-ratio">27 LP 36W 26L</div>
                <div className="win-ratio">Win Ratio 58%</div>
              </div>
            </div>
            <div className="player-champion-stats"></div>
          </div>
          <div className="player-match-history-wrapper">
            
            <div className="match-history-filters">
              <span>Match History</span>
              <div className="match-history-buttons">
                <button>Ranked Solo</button>
                <button>Champion</button>
              </div>
              </div>
            <div className="match-history-container">
              <div className="match-history-header">
                <div className="matches-win-loss-ratio"></div>
              </div>
              <div className="match-cards-container"> 
                {cardData.map((card) => <AnimatedMatchCard matchData={card}/>)}
              </div>
            </div>
           
          
            
          </div>
        
        </div>
      </div>
    
     
      
     
    </div>
  );
}

export default App;
