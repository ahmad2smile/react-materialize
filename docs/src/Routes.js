import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import {IndexRoute, Route} from 'react-router';
import Root from './Root';
import HomePage from './HomePage';
import GettingStartedPage from './GettingStartedPage';
import BadgesPage from './BadgesPage';
import ButtonsPage from './ButtonsPage';
import BreadcrumbsPage from './BreadcrumbsPage';
import CardsPage from './CardsPage';
import ChipsPage from './ChipsPage';
import CollapsiblesPage from './CollapsiblesPage';
import CollectionsPage from './CollectionsPage';
import DropdownPage from './DropdownPage';
import FooterPage from './FooterPage';
import FormsPage from './FormsPage';
import GridPage from './GridPage';
import MediaPage from './MediaPage';
import ModalsPage from './ModalsPage';
import NavbarPage from './NavbarPage';
import PaginationPage from './PaginationPage';
import PreloaderPage from './PreloaderPage';
import SideNavPage from './SideNavPage';
import TablesPage from './TablesPage';
import TabsPage from './TabsPage';

export default () => (
  <Router>
    <div>
      {routes.map(({ path, component, ...others }, i) => (
        <Route key={i} path={path} component={component} {...others} />
      ))}
    </div>
  </Router>
);

// <IndexRoute component={GettingStartedPage} /> initial route ?
// { path='index.html' component={HomePage} /> // always render ?

const routes = [
  { path: '/', exact: 'exact', component: Root },
  { path: 'getting-started.html', component: GettingStartedPage },
  { path: 'badges.html', component: BadgesPage },
  { path: 'buttons.html', component: ButtonsPage },
  { path: 'breadcrumbs.html', component: BreadcrumbsPage },
  { path: 'cards.html', component: CardsPage },
  { path: 'chips.html', component: ChipsPage },
  { path: 'collapsible.html', component: CollapsiblesPage },
  { path: 'collections.html', component: CollectionsPage },
  { path: 'dropdown.html', component: DropdownPage },
  { path: 'footer.html', component: FooterPage },
  { path: 'forms.html', component: FormsPage },
  { path: 'grid.html', component: GridPage },
  { path: 'media.html', component: MediaPage },
  { path: 'modals.html', component: ModalsPage },
  { path: 'navbar.html', component: NavbarPage },
  { path: 'pagination.html', component: PaginationPage },
  { path: 'preloader.html', component: PreloaderPage },
  { path: 'sidenav.html', component: SideNavPage },
  { path: 'table.html', component: TablesPage },
  { path: 'tabs.html', component: TabsPage }
];
