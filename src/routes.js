import Home from './Component/Home';
import About from './Component/About';
import Nested from './Component/Nested';

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
];
