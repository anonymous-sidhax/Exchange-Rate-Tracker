import cheerio from 'cheerio'

const remitlyScrape = async function remitly()
{
  const response = await fetch('https://www.remitly.com/us/en/india/pricing', {
    cache: 'no-cache',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }});

  const body = await response.text();

  const $ = cheerio.load(body);
  const titleList = [];

  $('.fheif50').each((i, rate) => {
    const titleNode = $(rate);
    const titleText = titleNode.text();
    
    titleList.push(titleText);
  });

  const lastScraped = new Date().toISOString()
//   console.log(titleList)
  return {
      titleList, lastScraped
    }
}

export default remitlyScrape