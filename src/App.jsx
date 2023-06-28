import { ProContextProvider } from './components/Context'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Rick_and_morty from './routes/rick_and_morty'
import Home from './routes/home'

function App() {
  return (
    <BrowserRouter>
      <ProContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/rick_and_morty' element={<Rick_and_morty />}>
            <Route path=':slug' element={<Rick_and_morty />}/>
          </Route>


          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </ProContextProvider>
    </BrowserRouter>
  )
    
}

export default App
