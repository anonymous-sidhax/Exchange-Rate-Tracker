import React from 'react'

const Remitly = (props) => {
  console.log(props)
  return (
    <>
        <div>Remitly Rate: {props.props.remitlyResult.titleList}</div>
        <div>Last scraped: {props.props.remitlyResult.lastScraped}</div>
    </>
  )
}

export default Remitly