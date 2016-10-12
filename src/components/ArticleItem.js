import React from 'react'
import { pure } from 'recompose'
import { Link } from 'react-router'

const ArticleItem = ({ title, content, id }) => (
  <div>
    <div>
      <Link to={`articles/${id}`}>{title}</Link>
    </div>
  </div>
)

export default pure(ArticleItem)