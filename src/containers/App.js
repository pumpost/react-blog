import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Blog</h2>
        </div>
        <ul>
          <li>
            <Link to="/articles">All article</Link>
          </li>
          <li>
            <Link to="/articles/new">Create new article</Link>
          </li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
