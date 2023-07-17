
import { Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Questions from './components/Questions/Questions';
import AskQuestions from './components/AskQuestions/AskQuestions';
import DisplayQuestions from './components/Questions/DisplayQuestions';
import Login from './components/Auth/login';
import Forgotpassword from './components/Auth/Forgotpassword';
import PasswordReset from './components/Auth/PasswordReset';
import UserProfile from './components/userprofile/UserProfile';


function App() {
  // const users = [
  //   {
  //     name: "suresh",
  //     joinedON: "March 21 2023",
  //     questionlist: [
  //       {
  //         questionTitle: "what is node",
  //         questionBody: "explain about node",
  //         questionTags: ["react", "node"],
  //         noOfAnswers: 1,
  //         upVote: 5,
  //         downVote: 0,
  //         askedOn: "2023-07-10T06:04:22.099+00:00",
  //         answer: [
  //           {
  //             answerBody: "Developers use Node. js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model",
  //             userAnswered: "create server-side web applications",
  //             userId: "string",
  //             answeredOn: " March 22 2023"
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/forgotpassword' element={<Forgotpassword />} />
        <Route path='/forgotpassword/:id/:token' element={<PasswordReset />} />
        <Route path='/login' element={<Login />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/askquestions' element={<AskQuestions />} />
        <Route path='/userinfo/:id' element={<UserProfile />} />
        <Route path='/questions/:id' element={<DisplayQuestions />} />
      </Routes>
    </div>
  );
}

export default App;
