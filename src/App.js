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
           <Route path="/" component={SectionMarks} exact />
           <Route path="/sections" component={SectionDashBoard} />
           <Redirect from="*" to="/"  />
         </Switch> 
        </Main>
      </Router> 
    </div>
  );
}

export default App;
