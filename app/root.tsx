import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { FunctionComponent, PropsWithChildren } from "react";

import "./styles/index.css";

export const Layout: FunctionComponent<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
