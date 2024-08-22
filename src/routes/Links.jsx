import { Route, Routes } from 'react-router-dom'

import Gallery from '../pages/Gallery'
import Biography from '../pages/Biography'


const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Gallery/>}/>
        <Route path="/bio" element={<Biography/>}/>
    </Routes>
  )
}

export default Links
