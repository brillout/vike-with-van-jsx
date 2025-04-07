import van from "vanjs-core"

export { Counter }

function Counter() {
  const count = van.state(0)

  return <button type="button" onClick={() => (count.val += 1)}>Counter {count}</button>
}
