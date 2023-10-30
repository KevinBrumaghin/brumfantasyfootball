import './Components/Header.css'
import './App.css'
import './Components/SearchBar.css'
import Header from './Components/Header.jsx'
import Blog from './Pages/Blog'
import Rankings from './Pages/Rankings/Rankings'
import Leaders from './Pages/Leaders'

function App() {
  let Component;
  switch (window.location.pathname){
    case "/":
      Component = Blog;
      break
    case "/blog":
      Component = Blog;
      break
    case "/rankings":
      Component = Rankings;
      break
    case "/leaders":
      Component = Leaders;
      break
  }
  return (
    <>
      <Header />
      <Component/>
    </>
  )
}

export default App
