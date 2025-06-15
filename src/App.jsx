import { useState } from 'react'

import './App.css'
import HeaderForApp from './pages/HeaderForApp'
import { Route, Routes } from 'react-router-dom'
import DashBoardComponent from './pages/DashBoardComponent'
import NoMatchComponent from './pages/NoMatchComponent'
import PostUserComponent from './pages/PostUserComponent'
import UpdateComponent from './pages/UpdateComponent'
import StateSampleComponent from './pages/StateSampleComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<HeaderForApp/>
<StateSampleComponent/>
<Routes>
  <Route path='/' element = {<DashBoardComponent/ >}></Route>
  <Route path='/employee' element = {<PostUserComponent/ >}></Route>
   <Route path='/employee/:id' element = {<UpdateComponent/ >}></Route>
  <Route path='*' element = {<NoMatchComponent/ >}></Route>
</Routes>
    </>
  )
}

export default App
