import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'
import Alert from "./components/layout/Alert";
import User from "./pages/User";
function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <BrowserRouter>
      <div className="parent flex flex-col justify-between special">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">
        <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<Error />} />
            <Route path="/*" element={<Error />} />
            <Route path="/user/:login" element={<User />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
    </BrowserRouter>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
