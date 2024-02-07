import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../css/App.css'
import PostList from './PostList'
import UserDetail from './UserDetail'
import UserList from './UserList'

export default function App() {
  return(
      <Router>
        <Routes>
          <Route path= "/posts" element = {<PostList/>}/>
          <Route path = "/users/" element = {<UserList/>}/> 
          <Route path = "/users/:userId/" element = {<UserDetail/>}/> 
          <Route path='*' element= {
            <div>
            <div> Oops, this page doesn't exits. Maybe you were looking for:</div>
            <Link to="/posts"> Posts </Link>
            <Link to="/users/">Users</Link>
            </div>
          }/>  
        </Routes>
      </Router>
  )
}