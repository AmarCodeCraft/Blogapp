import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import PostForm from "./components/PostForm";
import PrivateRoute from "./components/PrivateRoute";
import About from "./components/About";
import Contact from "./components/Contact";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Register from "./components/Register";
import Login from "./components/Login";
import Verify from "./components/Verify";
import PleaseVerify from "./components/PleaseVerify";
import Profile from "./components/Profile";
import WritingGuide from "./components/WritingGuide";
import FAQ from "./components/FAQ";
import HelpCenter from "./components/HelpCenter";
import SEOWrapper from "./components/SEOWrapper";

function App() {
  return (
    <Router>
      <SEOWrapper>
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen flex flex-col">
          <Header />
          <main className="container mx-auto px-4 py-8 max-w-7xl flex-grow">
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/post/:id" element={<PostDetails />} />
              <Route
                path="/create"
                element={
                  <PrivateRoute>
                    <PostForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <PrivateRoute>
                    <PostForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/writing-guide" element={<WritingGuide />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/verify/:token" element={<Verify />} />
              <Route path="/please-verify" element={<PleaseVerify />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SEOWrapper>
    </Router>
  );
}

export default App;
