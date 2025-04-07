export type {
  ChangeEvent,
  LayoutProps,
  PageContext,
  PageContextCLIENT,
  PageContextSERVER
};

import type { PageContextClient, PageContextServer } from "vike/types";

export type PageComponent = () => JSX.Element;


type PageContextCustom = {
  Page: PageComponent;
  title?: string;
  // add more meta tags here
};

type PageContextCLIENT = PageContextClient & PageContextCustom;
type PageContextSERVER = PageContextServer & PageContextCustom;
type PageContext = PageContextCLIENT | PageContextSERVER;
type LayoutProps = { Page: PageComponent; pageContext: PageContext };

type ChangeEvent<T extends EventTarget & Element = HTMLInputElement> =
  & InputEvent
  & { target: T };

