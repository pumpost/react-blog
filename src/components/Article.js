import React from 'react'
import { Link } from 'react-router'
import { compose, withHandlers, pure } from 'recompose'

const Article = ({ title, content, id, onClick }) => (
  <div>
    <h2>{title}</h2>
    <hr />
    <div>
      {content}
    </div>
    <div>
      <Link to={`/articles/${id}/edit`} ><button>Edit</button></Link>
      <button onClick={onClick}>Delete</button>
    </div>
  </div>
)

export default compose(
  withHandlers({
    onClick: ({ id, deleteArticle }) => event => {
      deleteArticle({ id })
    },
  }),
  pure,
)(Article)