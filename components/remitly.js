import React from 'react'
import cheerio from 'cheerio'

const fetch = require('node-fetch');


const Remitly = (props) => {
  console.log(props.props)
  return (
    <>
        <div>Remitly Rate: {props.props.titleList}</div>
        <div>Last scraped: {props.props.lastScraped}</div>
        {/* <button value="Refresh Rate" onClick={"getStaticProps()"}> Refresh</button> */}
    </>
  )
}

export default Remitly