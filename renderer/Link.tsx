import van, { type State } from "vanjs-core";

import { usePageContext } from "./usePageContext";

export { Link };

const Link: JSX.Component<"a"> = ({ href, children, ...initialProps } = {}) => {
  const { urlPathname } = usePageContext();
  const hrefAtt = () =>
    (href as State<string>)?.val ? (href as State<string>).val : href as string;
  const isActive = () => hrefAtt() === "/"
    ? urlPathname === hrefAtt()
    : urlPathname?.startsWith(hrefAtt()) || false;

  const props = { ...initialProps };
  van.derive(() => {
    if (initialProps.class || isActive()) {
      props.class = [initialProps.class, isActive() && 'is-active'].filter(Boolean).join(' ');
    }
  });

  return (
    <a href={hrefAtt} {...props}>
      {children}
    </a>
  );
};
