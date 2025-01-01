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
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/blog/:id' Component={Blog} />
      </Routes>
    </BlogsProvider>
  )
}

export default App;