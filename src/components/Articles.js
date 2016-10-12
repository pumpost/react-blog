import React from 'react'
import { pure } from 'recompose'
import Article from './Article'

const Articles = ({ articles }) => (
  <div>
    {
      articles.map(
        article => (
          <Article
            key={article.id}
            {...article}
          />
        )
      )
    }
  </div>
)

export default pure(Articles)