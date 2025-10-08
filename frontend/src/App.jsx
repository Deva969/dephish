
import './App.css'
import routes from './routes'
import { BrowserRouter,Routes } from 'react-router-dom'

function App() {

  return (
    <> 
        <BrowserRouter>
            <Routes>{routes}</Routes>
        </BrowserRouter>
    </>
  )
}

export default App
