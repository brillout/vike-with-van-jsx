export { Page }

import { usePageContext } from '../../renderer/usePageContext'

function Page() {
  const pageContext = usePageContext()
  let { is404, abortReason } = pageContext
  if (!abortReason) {
    abortReason = is404 ? 'Page not found.' : 'Something went wrong.'
  }
  return (
    <Center>
      <p style={{ "font-size": '1.3em' }}>{abortReason}</p>
    </Center>
  )
}

function Center({ style, children, ...props }: JSX.IntrinsicElements['div']) {
  return (
    <div
      style={{
        height: 'calc(100vh - 100px)',
        display: 'flex',
        "justify-content": 'center',
        "align-items": 'center',
        ...(style as JSX.CSSProperties)
      }}
      {...props}
    >
      {children}
    </div>
  )
}
