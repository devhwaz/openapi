import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  Api as ApiView,
  Api as AnalyticsView,
  Api as AboutView,
  Api as InfoView,
  Blog as BlogView,
  BlogDetail as BlogDetailView,
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={ApiView}
        exact
        sidebar
        layout={MainLayout}
        path="/api"
      />
      <RouteWithLayout
        component={BlogView}
        exact
        layout={MainLayout}
        path="/blog"
      />
      <RouteWithLayout
        component={BlogDetailView}
        exact
        layout={MainLayout}
        path="/blog/:id"
      />
      <RouteWithLayout
        component={AnalyticsView}
        exact
        layout={MainLayout}
        path="/analytics"
      />
      <RouteWithLayout
        component={AboutView}
        exact
        layout={MainLayout}
        path="/about"
      />
      <RouteWithLayout
        component={InfoView}
        exact
        layout={MainLayout}
        path="/info"
      />
      {/* 템플릿 디폴트 라우터 */}
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
