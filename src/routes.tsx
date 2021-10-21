// Dependencies
import { Route, Switch } from 'react-router-dom'

// Components
import App from './App'
import Home from './components/Home'
import Error404 from './components/Error404'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Profile from './components/Profile'
import ImportData from './components/ImportData'

const AppRoutes = () => (
    <App>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/importData" component={ImportData} exact />
            <Route component={Error404} />
        </Switch>
    </App>
)
export default AppRoutes