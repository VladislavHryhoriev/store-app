"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, [params]);

  return <div>{params.category}</div>;
};

export default Page;
