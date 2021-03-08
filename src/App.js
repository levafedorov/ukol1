import "./main.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import SectionMarks from "./Components/Sections/SectionMarks/SectionMarks";
import SectionDashBoard from "./Components/Sections/SectionDashBoards/SectionDashBoards";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={`/${process.env.PUBLIC_URL}`}>
       <Header/>
         <Main>
         <Switch>
          <Redirect from="/sections" to={`/${process.env.PUBLIC_URL}/sections`} />
           <Route path={`/${process.env.PUBLIC_URL}/sections`} component={SectionDashBoard} exact/>
           <Route path="" component={SectionMarks} exact />
           {/* <Redirect from="*" to="/ukol-first-deploy" /> */}
         </Switch> 
        </Main>
      </Router> 
    </div>
  );
}

export default App;
