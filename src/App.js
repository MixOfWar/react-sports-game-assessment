import Game from './components/Game/Game.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Game
        name='Moda Center'
        teamNameOne='Trail Blazers'
        teamLogoOne='./trailblazerslogo.webp'
        teamNameTwo='Celtics'
        teamLogoTwo='./celticsTeamLogo.jpg'
      />
    </div>
  );
}

export default App;
