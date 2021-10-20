import { render } from 'react-dom'
import AppRoutes from './routes'
import { BrowserRouter as Router } from "react-router-dom"

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
)