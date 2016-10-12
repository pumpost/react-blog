import React from 'react'
import { compose, withHandlers, pure } from 'recompose'
import withForm from '../lib/withForm'

const Form = ({ title, content, onClick }) => (
  <div>
    <ul>
      <li>Title : <input type='text' placeholder='title' {...title} /></li>
      <li>Content: <input type='text' placeholder='content' {...content} /></li>
      <li><button onClick={onClick}>Create</button></li>
    </ul>
  </div>
)

export default compose(
  withForm(['title', 'content']),
  withHandlers({
    onClick: ({ title, content, saveArticle, clearFields }) => event => {
      saveArticle({ title: title.value, content: content.value })
      clearFields()
    },
  }),
  pure,
)(Form)