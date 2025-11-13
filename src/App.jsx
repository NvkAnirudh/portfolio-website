import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResearchArticle from './pages/ResearchArticle';
import ArtifactPage from './pages/ArtifactPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research/:paperId" element={<ResearchArticle />} />
          <Route path="/artifacts/:categoryId" element={<ArtifactPage />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
