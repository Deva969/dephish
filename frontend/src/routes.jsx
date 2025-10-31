import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import EmployeeLayout from "./components/Employee/EmployeeLayout";
import Game from "./components/Employee/Game"
import Dashboard from "./components/Employee/Dashboard";
import Quiz from "./components/Employee/Quiz";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminMainPage from "./components/Admin/AdminMainPage";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AssignTasks from "./components/Admin/AssignTasks";
import PhishingCampaign from "./components/Admin/PhishingCampaign";
import QuizDetail from "./components/Employee/QuizDetail";
import SlipUps from "./components/Employee/Slipups";

const routes = (
  <>
    <Route path="/" element={<LandingPage />} />
    
    <Route path="/dashboard" element={<EmployeeLayout/>}>
      <Route index element={<Dashboard />} />
    </Route>

    <Route path="/game" element={<EmployeeLayout/>}>
      <Route index element={<Game />}/>
    </Route>

    <Route path="/quiz" element={<EmployeeLayout/>}>
      <Route index element={<Quiz />} />
      <Route path=":quizId" element={<QuizDetail/>}/>
    </Route>

    <Route path="/slipups" element={<EmployeeLayout/>}>
      <Route index element={<SlipUps />} />
    </Route>

    <Route path="/admin" element={<AdminLayout/>}>
      <Route index element={<AdminMainPage/>} />
      <Route path="dashboard" element={<AdminDashboard/>} />
      <Route path="assigntasks" element={<AssignTasks/>} />
      <Route path="phishing-campaign" element={<PhishingCampaign/>}/>
    </Route>
     
  </>
);

export default routes;