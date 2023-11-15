import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './assets/style/Style.css';
import Home from './assets/views/Home';
import News from './assets/views/News';
import NewsDetails from './assets/views/NewsDetails';
import Contact from './assets/views/Contact';
import NotFound from './assets/views/NotFound';
import { ArticleProvider } from './assets/contexts/ArticleContexts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ArticleProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsDetails" element={<NewsDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ArticleProvider>  
    </BrowserRouter>
  </React.StrictMode>
);

