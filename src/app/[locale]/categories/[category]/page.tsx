"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, [params]);

  return <div className="ml-[266px]">{params.category}</div>;
};

export default Page;
