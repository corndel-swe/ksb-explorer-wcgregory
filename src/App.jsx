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

function App() {
  const listKsbs = ksbs.map(ksb =>
    <li> Code: {ksb.Code}</li>
  );
  return (
    <ul>{listKsbs}</ul>
  )
}

export default App
