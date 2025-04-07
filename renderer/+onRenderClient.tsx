// https://vike.dev/onRenderClient
export { onRenderClient }

import van from "vanjs-core";
import { hydrate } from "@vanjs/client";
import { Layout } from './Layout'
import { getPageTitle } from './getPageTitle'
import type { OnRenderClientAsync } from 'vike/types'
import { setPageContext } from "./usePageContext";

const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { Page } = pageContext
  
  const page = () => {
    setPageContext(pageContext)
    return (
      <Layout pageContext={pageContext}>
        <Page />
      </Layout>
    ) as HTMLElement
  };
  const container = document.getElementById('root')!;
  van.hydrate(container, (dom) => hydrate(dom, [page()]))

  document.title = getPageTitle(pageContext)
}
