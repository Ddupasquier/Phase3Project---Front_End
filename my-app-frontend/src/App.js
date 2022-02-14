import "./style.css";
import IntroScreen from "./IntroScreen";
import GameContainer from "./GameContainer";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
        <Route path="/gametitle">
          <GameContainer />
        </Route>
        <Route path="/">
          <IntroScreen />
        </Route>
        <Route path="*">
          <h1>404: You done goofed</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
