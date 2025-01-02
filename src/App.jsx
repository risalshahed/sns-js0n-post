import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Blog from './pages/Blog';
import Home from './pages/Home'
import BlogsProvider from './provider/BlogsProvider';

function App() {
  return (
    <BlogsProvider>
      <Header />
      <main>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/blog/:id' Component={Blog} />
        </Routes>
      </main>
    </BlogsProvider>
  )
}

export default App;