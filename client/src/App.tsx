import { useEffect, useState } from 'react';
import { ArticleAPI } from './api/articles.api';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';

function App() {

  const [articles, setArticles] = useState<any[]>([])
  useEffect(() => {
    async function fetchAll() {
      const res = await ArticleAPI.getArticles();
      console.log(res);
      setArticles(res)
    };

    fetchAll()
  }, [])
  return (<Router>
    <div>
      {
        articles.map(article => {
          return <div key={article.id}>
            {article.title}
          </div>
        })
      }
    </div>
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <Routes>
        <Route  path='/home' element={< Home />}></Route>
        <Route  path='/about' element={< About />}></Route>
      </Routes>
    </div>
  </Router>

  );
}

export default App;
