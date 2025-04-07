// https://vike.dev/data
export { data }
export type Data = Awaited<ReturnType<typeof data>>

import { usePageContext, setPageContext } from '../../../renderer/usePageContext'
import { filterMoviesData, getStarWarsMovies, getTitle } from './getStarWarsMovies'

async function data() {
  await sleep(700) // Simulate slow network
  const movies = await getStarWarsMovies()
  // const pageContext = usePageContext()
  // const result = {
  //   // We remove data we don't need because the data is passed to the client; we should
  //   // minimize what is sent over the network.
  //   movies: filterMoviesData(movies),
  //   // The page's <title>
  //   title: getTitle(movies)
  // }
  // setPageContext({ ...pageContext, data: result })
  return {
    // We remove data we don't need because the data is passed to the client; we should
    // minimize what is sent over the network.
    movies: filterMoviesData(movies),
    // The page's <title>
    title: getTitle(movies)
  };
}

function sleep(milliseconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, milliseconds))
}
