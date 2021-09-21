import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopPage from '../pages/TopPage';
import Header from '../components/Header';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/'
          component={Header}
          exact={true}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
