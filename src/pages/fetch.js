import React, { useEffect, useState } from "react";
import { H1 } from "../components/styles/typography";
import "../components/styles/style.css";

export const Api = () => {
  const [isFeching, setisFeching] = useState(false);
  const [data, setdata] = useState();
  useEffect(() => {
    setisFeching(true);
    fetch("https://random-data-api.com/api/v2/users")
      .then(async (response) => {
        setdata(await response.json());
      })
      .finally(() => {
        setisFeching(false);
      });
  }, []);
  if (isFeching) {
    return <span class="loader"></span>;
  }
  return null;
};
