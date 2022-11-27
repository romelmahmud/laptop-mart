import { useEffect, useState } from "react";

const useCheckBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:8000/users/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, isBuyerLoading];
};

export default useCheckBuyer;
