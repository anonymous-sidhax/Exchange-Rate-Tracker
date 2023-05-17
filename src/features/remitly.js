import cheerio from 'cheerio'
import Scrape from './scrape';

const remitlyUrl = 'https://www.remitly.com/us/en/india/pricing'

const remitlyScrape = async function remitly()
{
  const response = await Scrape(remitlyUrl)
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