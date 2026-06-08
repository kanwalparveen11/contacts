import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ContactDetailPage from "./pages/ContactDetailPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
const App = () => {
  return (
      <Router>
         <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/contacts:id" element={<ContactDetailPage/>}></Route>
           <Route path="/auth/login" element={<LoginPage/>}></Route>
           <Route path="*" element={<NotFoundPage/>}></Route>
         </Routes>
      </Router>
  );
}
export default App;