import React from 'react'
import { pure } from 'recompose'
import ArticleItem from './ArticleItem'

const Articles = ({ articles }) => (
  <div>
    {
      articles.map(
        article => (
          <ArticleItem
            key={article.id}
            {...article}
          />
        )
      )
    }
  </div>
)

export default pure(Articles)