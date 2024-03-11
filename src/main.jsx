import React from 'react'
import ReactDOM from 'react-dom/client'
import TreeView from '.'
import menus from './data'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <TreeView menus={menus} /> 
  </>,
)
