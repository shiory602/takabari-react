import { BrowserRouter, Route, Switch } from "react-router-dom";
// import TopPage from '../pages/TopPage';
import Header from '../components/Header';

const NotFound = () => {
  return (
    <h2>404 NOT FOUND</h2>
  )
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Header} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
