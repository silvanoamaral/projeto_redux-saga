import React from 'react'

const Suggestions = (props) => {
  return <>
  {props.results &&
    <ul>{
      props.results.map(r => (
        <li key={r.id}>
          {r.nomelogradouro}
        </li>
      ))
    }</ul>
  }
  </>
}

export default Suggestions