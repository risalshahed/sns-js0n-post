import './App.css'
import Header from './components/Header';
import Blog from './pages/Blog';
import Home from './pages/Home'
import BlogsProvider from './provider/BlogsProvider';

function App() {
  return (
    <BlogsProvider>
      <Header />
      <Home />
      <Blog />
    </BlogsProvider>
  )
}

export default App;