interface BodyProps {
   weight_derivation: string
}

async function fetchMethod(link: string, method: string, body?: BodyProps) {
  try{
    let response;
    if (method === 'POST') {
      response = await fetch(link, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({body}),
      });
    } else{
      response = await fetch(link)
    }
    if (!response?.ok) throw new Error('Error fetching data');
    const data = await response.json();
    return data;
  } catch(error){
    Error(`Error: ${error}`);
  }
};

export default fetchMethod;