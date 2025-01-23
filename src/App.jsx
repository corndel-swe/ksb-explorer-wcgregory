import ksbs from './data/ksbs.json'

/**
// Original
function App() {
  return (
    <ul>
      {ksbs.map(ksb => (
        <li>
          <p>Code: {ksb.Code}</p>
          <p>Description: {ksb.Description}</p>
        </li>
      ))}
    </ul>
  )
}

export default App
*/

function SingleKsb(index=0) {
  let ksb = ksbs[index]
  return (
    <li>
      <p>Code: {ksb.Code}</p>
      <p>Description: {ksb.Description}</p>
    </li>
  )
}

function ReturnKsbList() {
  const listKsbs = ksbs.map(ksb =>
    <li>Code: {ksb.Code}</li>
  );
  return (
    <ul>{listKsbs}</ul>
  )
}

function App() {
  let ksb = ksbs[0]
  return (
    <div>
      <h3>Single KSB</h3>
        <p>{ksb.Code}</p>
        <p>{ksb.Description}</p>
      <h4>KSB List</h4>
      <ReturnKsbList />
    </div>
  )
}

export default App
