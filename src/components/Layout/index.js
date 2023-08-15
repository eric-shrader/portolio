import './index.scss'

// sidebar
import Sidebar from './../Sidebar/index.js'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
