import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import Post from './Pages/Post'
import Signup from './Pages/Signup'

const All_Routes = () => {
  return (
    <div>
<Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    <Route path="/posts" element={<Post />} />
</Routes>
    </div>
  )
}

export default All_Routes