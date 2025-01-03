import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Blog from './pages/Blog';
import Home from './pages/Home'
import BlogsProvider from './provider/BlogsProvider';
import BellCounterProvider from './provider/BellCounterProvider';

function App() {
  return (
    <BellCounterProvider>
      <BlogsProvider>
        <Header />
        <main>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/blog/:id' Component={Blog} />
          </Routes>
        </main>
      </BlogsProvider>
    </BellCounterProvider>
  )
}

export default App;