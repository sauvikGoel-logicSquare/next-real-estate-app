import axios from "axios";
//   headers: {
//     'X-RapidAPI-Key': '2165fffe36msh49fdb603cc7dfb7p10c417jsn0e425aef40d2',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async (url) => {
  console.log(url);
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "2165fffe36msh49fdb603cc7dfb7p10c417jsn0e425aef40d2",
      // "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      // "x-rapidapi-key": "2165fffe36msh49fdb603cc7dfb7p10c417jsn0e425aef40d2",
    },
  });

  console.log(data);
  return data;
};
