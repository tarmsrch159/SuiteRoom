import Carousel from '../Components/Carousel'
import { Route } from 'react-router-dom';

export const routes = [
  { path: '/home', name: 'Home', component: Carousel },
  // { path: '/Room&Suite', name: 'Room&Suite', component: About },
  // { path: '/Banquet', name: 'Banquet', component: Contact },
];

export const RouteComponents = () => (
  <>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} exact component={route.component} />
    ))}
    <Route component={NotFound} />
  </>
);