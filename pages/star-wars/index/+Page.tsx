export default Page

import { Link } from '../../../renderer/Link';
import { useData } from '../../../renderer/useData'
import type { Data } from './+data'

function Page() {
  const { movies } = useData<Data>();
  return (
    <>
      <h1>Star Wars Movies</h1>
      <ol>
        {movies.map(({ id, title, release_date }) => (
          <li id={id}>
            <Link href={`/star-wars/${id}`}>{title}</Link> ({release_date})
          </li>
        ))}
      </ol>
      <p>
        Source: <a href="https://star-wars.brillout.com">star-wars.brillout.com</a>.
      </p>
      <p>
        Data can be fetched by using the <code>data()</code> hook.
      </p>
    </>
  )
}
