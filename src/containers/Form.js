import React, { Component } from 'react';
import { browserHistory } from 'react-router'

import Form from '../components/Form'

class FormContainer extends Component {

  static API_ENDPOINT = 'http://localhost:8000/article'

  state = {
    article: {},
    formLabel: {
      header: 'Create',
      button: 'Create',
    }
  }

  componentDidMount() {
    if (this.props.routeParams.hasOwnProperty('id')) {
      this.loadArticle(this.props.routeParams)
    }
  }

  setArticle = (article) => {
    this.setState({
      article,
      formLabel: {
        header: 'Edit',
        button: 'Update',
      },
    })
  }

  loadArticle = ({ id }) => {
    fetch(`${this.constructor.API_ENDPOINT}/${id}`)
      .then(article => article.json())
      .then(article => this.setArticle(article))
  }

  saveArticle = ({ title, content, id }) => {
    let apiUrl = this.constructor.API_ENDPOINT
    let method = 'POST'

    if (id !== undefined) {
      apiUrl = apiUrl + '/' + id
      method = 'PUT'
    }

    fetch(apiUrl, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    }).then(() => {
     if (method === 'PUT') {
       browserHistory.push('/articles')
     }
    })
  }

  render() {
    return (
      <div>
        <Form saveArticle={this.saveArticle} {...this.state.article} formLabel={this.state.formLabel} />
      </div>
    );
  }
}

export default FormContainer;
