import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import AccountOverview from "./views/AccountOverview";
import UserProfileLite from "./views/UserProfileLite";
import Invest from "./views/Invest";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/account-overview" />
  },
  {
    path: "/account-overview",
    layout: DefaultLayout,
    component: AccountOverview
  },
  {
    path: "/invest",
    layout: DefaultLayout,
    component: Invest
  },
  // {
  //   path: "/errors",
  //   layout: DefaultLayout,
  //   component: Errors
  // },
  // {
  //   path: "/components-overview",
  //   layout: DefaultLayout,
  //   component: ComponentsOverview
  // },
  // {
  //   path: "/tables",
  //   layout: DefaultLayout,
  //   component: Tables
  // },
  // {
  //   path: "/blog-posts",
  //   layout: DefaultLayout,
  //   component: BlogPosts
  // }
];
