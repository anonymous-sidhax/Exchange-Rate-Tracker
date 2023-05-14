import React from 'react'

const Remitly = (props) => {
  console.log(props)
  return (
    <>
        <div>Remitly Rate: {props.props.remitlyResult.titleList}</div>
        <div>Last scraped: {props.props.remitlyResult.lastScraped}</div>
        {/* <button value="Refresh Rate" onClick={"getStaticProps()"}> Refresh</button> */}

    </>
  )
}

export default Remitly