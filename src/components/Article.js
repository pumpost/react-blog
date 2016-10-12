import React from 'react'
import { pure } from 'recompose'
import { Link } from 'react-router'

const Article = ({ title, content, id }) => (
  <div>
    <div>
      <Link to={`articles/${id}`}>{title}</Link>
    </div>
  </div>
)

export default pure(Article)