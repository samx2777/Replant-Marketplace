import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SponsorsPage from './pages/SponsorsPage';
import SponsorDetailPage from './pages/SponsorDetailPage';
import PlantersPage from './pages/PlantersPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const handleNavigate = (page: string, id?: string) => {
    setCurrentPage(page);
    setSelectedId(id);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'sponsor':
        return <SponsorsPage onNavigate={handleNavigate} />;
      case 'sponsor-detail':
      case 'marketplace':
        return <SponsorDetailPage onNavigate={handleNavigate} />;
      case 'planter':
        return <PlantersPage onNavigate={handleNavigate} />;
      case 'about':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </div>
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
