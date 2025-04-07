export { Layout }

import logoUrl from './logo.svg'
import { Link } from './Link'
import type { PageContext } from 'vike/types'
import './css/index.css'
import './Layout.css'

function Layout({ /*pageContext,*/ children }: { pageContext: PageContext; children: JSX.Element }) {
  return (
    <Frame>
      <Sidebar>
        <Logo />
        <Link href="/">Welcome</Link>
        <Link href="/star-wars">Data Fetching</Link>
        <Link href="/hello">Routing</Link>
      </Sidebar>
      <Content>{children}</Content>
    </Frame>
  )
}

function Frame({ children }: { children: JSX.Element }) {
  return (
    <div
      id="main"
      aria-label='Main Layout'
      style={{
        display: 'flex',
        "max-width": "900px",
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

function Sidebar({ children }: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      style={{
        padding: "20px",
        display: 'flex',
        "flex-shrink": "0",
        "flex-direction": 'column',
        "line-height": '1.8em',
        "border-right": '2px solid #eee'
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: JSX.Element }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: "20px",
          "padding-bottom": "50px",
          "min-height": '100vh'
        }}
      >
        {children}
      </div>
    </div>
  )
}

function Logo() {
  return (
    <div
      style={{
        "margin-top": "20px",
        "margin-bottom": "10px"
      }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  )
}
