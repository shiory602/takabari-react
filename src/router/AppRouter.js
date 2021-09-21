import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopPage from '../pages/TopPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/'
          component={TopPage}
          exact={true}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
