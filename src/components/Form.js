import React from 'react'
import { compose, withHandlers, pure } from 'recompose'
import withForm from '../lib/withForm'

const Form = ({ title, content, onClick, formLabel }) => (
  <div>
    <h2>{formLabel.header} Article</h2>
    <ul>
      <li>Title : <input type='text' placeholder='title' {...title} /></li>
      <li>Content: <input type='text' placeholder='content' {...content} /></li>
      <li><button onClick={onClick}>{formLabel.button}</button></li>
    </ul>
  </div>
)

export default compose(
  withForm(['title', 'content']),
  withHandlers({
    onClick: ({ title, content, saveArticle, clearFields, id }) => event => {
      saveArticle({ title: title.value, content: content.value, id: id })
      clearFields()
    },
  }),
  pure,
)(Form)