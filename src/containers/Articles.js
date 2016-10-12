import React, { Component } from 'react';
import Articles from '../components/Articles'

class ArticleContainer extends Component {

  static API_ENDPOINT = 'http://localhost:8000/article'

  state = {
    articles: [],
  }

  componentDidMount() {
    this.loadArticles()
  }

  setArticles = (articles) => {
    this.setState({
      articles,
    })
  }

  loadArticles = () => {
    fetch(this.constructor.API_ENDPOINT)
      .then(articles => articles.json())
      .then(articles => this.setArticles(articles))
  }

  render() {
    return (
      <div>
        Articles
        <hr />
        <Articles articles={this.state.articles}/>
      </div>
    );
  }
}

export default ArticleContainer;
