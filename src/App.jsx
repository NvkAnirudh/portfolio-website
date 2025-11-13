import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResearchArticle from './pages/ResearchArticle';
import ArtifactPage from './pages/ArtifactPage';
import ArtifactArticle from './pages/ArtifactArticle';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research/:paperId" element={<ResearchArticle />} />
          <Route path="/artifacts/:categoryId" element={<ArtifactPage />} />
          <Route path="/artifacts/:categoryId/:artifactId" element={<ArtifactArticle />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
