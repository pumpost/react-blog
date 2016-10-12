import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import Article from '../components/Article'

class ArticleContainer extends Component {

  static API_ENDPOINT = 'http://localhost:8000/article'

  state = {
    article: {},
  }

  componentDidMount() {
    const params = this.props.routeParams;
    this.loadArticle(params)
  }

  setArticle = (article) => {
    this.setState({
      article,
    })
  }

  loadArticle = ({ id }) => {
    fetch(`${this.constructor.API_ENDPOINT}/${id}`)
      .then(article => article.json())
      .then(article => this.setArticle(article))
  }

  redirectToBaseArticle = () => {
    browserHistory.push('/articles')
  }

  deleteArticle = ({ id }) => {
    fetch(`${this.constructor.API_ENDPOINT}/${id}`, {
      method: 'DELETE'
    }).then(this.redirectToBaseArticle)
  }

  render() {
    return (
      <div>
        <Article {...this.state.article} deleteArticle={this.deleteArticle} />
      </div>
    );
  }
}

export default ArticleContainer;
