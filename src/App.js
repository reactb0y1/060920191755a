import React from 'react';
import Comments from './CommentsContainer/CommentsConatiner'
import Profile from './Profile/Profile'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Profile/>
      <Comments/>
    </div>
  );
}

export default App;
