export const exerciseOptions={
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '427089cf9emsh9ec3c2edf8569c8p18cd51jsn9981026d38b9',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}


export const fetchData = async (url,options) => {

    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}