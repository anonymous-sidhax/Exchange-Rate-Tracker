

const Scrape = async function scrape(url)
{
    const response = await fetch(url, {
    cache: 'no-cache',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
    }});
    console.log(response.status)
    
    
    return response;
}

export default Scrape