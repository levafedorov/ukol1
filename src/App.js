import "./main.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import SectionMarks from "./Components/Sections/SectionMarks/SectionMarks";
import SectionDashBoard from "./Components/Sections/SectionDashBoards/SectionDashBoards";

function App() {
  return (
    <div className="App">
       <Header/>
         <Main>
           {/* <SectionMarks /> */}
           <SectionDashBoard />
        </Main>
    </div>
  );
}

export default App;
