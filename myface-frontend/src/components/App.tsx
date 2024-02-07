import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../css/App.scss'
import PostList from './PostList'
import UserDetail from './UserDetail'
import UserList from './UserList'
import CreatePost from './CreatePost'
import CreateUser from './CreateUser';

export default function App() {
  return(
      <Router>
        <Routes>
          <Route path= "/posts" element = {<PostList/>}/>
          <Route path = "/users/" element = {<UserList/>}/> 
          <Route path= "/posts/create" element = {<CreatePost/>}/>
          <Route path= "/users/create" element = {<CreateUser/>}/>
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