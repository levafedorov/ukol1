import "./main.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import SectionMarks from "./Components/Sections/SectionMarks/SectionMarks";
import SectionDashBoard from "./Components/Sections/SectionDashBoards/SectionDashBoards";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
         <Main>
         <Switch>
           <Redirect from="/sections" to="/sections/ukol-first-deploy" exact/>
           <Route path="/sections/ukol-first-deploy" component={SectionDashBoard} />
           <Redirect from="/" to="/ukol-first-deploy" exact/>
           <Route path="/ukol-first-deploy" component={SectionMarks}  />
           <Redirect from="*" to="/ukol-first-deploy" /> 
         </Switch> 
        </Main>
      </Router> 
    </div>
  );
}

export default App;
