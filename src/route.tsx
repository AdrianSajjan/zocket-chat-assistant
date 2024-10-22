import { ChatScreen } from "@/pages/chat";
import { WelcomeScreen } from "@/pages/welcome";
import { createRootRoute, createRoute, createRouter, NotFoundRoute } from "@tanstack/react-router";

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  path: "/",
  component: WelcomeScreen,
  getParentRoute: () => rootRoute,
});

const chatRoute = createRoute({
  path: "/chat",
  component: ChatScreen,
  getParentRoute: () => rootRoute,
  validateSearch: (search) => ({ query: (search.query as string) || "" }),
});

const routeTree = rootRoute.addChildren([homeRoute, chatRoute]);

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => "404 Not Found",
});

const router = createRouter({
  routeTree,
  notFoundRoute,
});

export { router };
