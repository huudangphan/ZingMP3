import { useEffect, useState } from "react";
export const Get = (api_url: string) => {
  const [data, setData] = useState([]);
  fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
  return data;
};
