import React, { Component } from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'
import Comment from './Comment.js'

class App extends Component {
  
  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!
  
  render() {
    return (
      <div id="app">
          <BlogPost />
          <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} />
            <ColorBox opacity={2} />
            <ColorBox opacity={3} />
            <ColorBox opacity={4} />
            <ColorBox opacity={5} />
            <ColorBox opacity={6} />
            <ColorBox opacity={7} />
            <ColorBox opacity={8} />
            <ColorBox opacity={9} />
            <ColorBox opacity={10} />
          </div>
      </div>
    )
  }
}

export default App;
