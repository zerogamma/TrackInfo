"use client";

import { useState } from "react";

const myHeaders = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
});

export const useTrack = () => {
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/track", {
      headers: myHeaders,
    });

    const newData = await res.json();

    setData(newData);
  };

  const fetchDataById = async (id: any) => {
    const res = await fetch("http://localhost:3000/api/trackById", {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify({ id: id }),
    });

    const newData = await res.json();
    setData(newData);
  };

  return { data, fetchData, fetchDataById };
};
