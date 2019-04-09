import Home from './Component/Home';
import About from './Component/About';
import Nested from './Component/Nested';
import Redirect from './Component/Redirect';
import Redirected from './Component/Redirect/redirected';

export const HomeTo = '/';

export const RouteComponent = [
    {
        component: Home,
        path: HomeTo,
        exact: true
    },
    {
        component: About,
        path: '/about',
        exact: true
    },
    {
        component: Nested,
        path: '/nested',
        exact: false
    },
    {
        component: Redirect,
        path: '/redirect',
        exact: true
    },
    {
        component: Redirected,
        path: '/redirected',
        exact: true
    },
];

export const RoutesLinks = [
    {
        to: HomeTo,
        title: 'Home'
    },
    {
        to: '/about',
        title: 'About'
    },
    {
        to: '/nested',
        title: 'Simple Nested'
    },
    {
        to: '/redirect',
        title: 'Redirect'
    },
];
