import React, { useState } from "react";
import remitlyScrape from '@/src/features/remitly';

const Remitly = (props) => {

  const [remitly, setRemitly] = useState(props.props.remitlyResult)
  const handleClick = async () => {
    const remitlyResult = await remitlyScrape()
    // console.log(remitlyResult)
    setRemitly(remitlyResult)
  }
  // console.log(props)
  console.log(remitly)
  console.log("-----------")
  return (
    <>
        <div>Remitly Rate: {remitly.titleList}</div>
        <div>Last scraped: {remitly.lastScraped}</div>
        <button value="Refresh Rate" onClick={handleClick}> Refresh</button>

    </>
  )
}

export default Remitly