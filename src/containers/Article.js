import React, { Component } from 'react';
import Form from '../components/Form'

class ArticleContainer extends Component {

  static API_ENDPOINT = 'http://localhost:8000/article'

  saveArticle = (fields) => {
    console.log(fields);
    fetch(this.constructor.API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields)
    })
  }

  render() {
    return (
      <div>
        <Form saveArticle={this.saveArticle} />
      </div>
    );
  }
}

export default ArticleContainer;
