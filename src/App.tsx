import { Fragment } from "react";

import { AppMain } from "@/layout/main/main";
import { AppSidebar } from "@/layout/sidebar/sidebar";
import { router } from "@/route";
import { RouterProvider } from "@tanstack/react-router";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return (
    <Fragment>
      <AppSidebar />
      <AppMain>
        <RouterProvider router={router} />
      </AppMain>
    </Fragment>
  );
}
