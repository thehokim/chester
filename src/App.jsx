import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import AboutUs from "./components/AboutUs";
import Outsource from "./components/Outsource";
import PartnerSection from "./components/PartnerSection";
import ClientsSay from "./components/ClientsSay";
import Answers from "./components/Answers";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsOfServicePage from "./components/TermsOfServicePage";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const HomePage = () => (
    <>
      <Header scrollToSection={scrollToSection} />
      <MainSection scrollToSection={scrollToSection} />
      <AboutUs scrollToSection={scrollToSection} />
      <Outsource scrollToSection={scrollToSection} />
      <PartnerSection />
      <ClientsSay />
      <Answers scrollToSection={scrollToSection} />
      <Booking />
      <Footer />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;