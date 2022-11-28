import { useEffect, useState } from "react";

const useCheckVerify = (email) => {
  const [isVerify, setIsVerify] = useState(false);
  const [isVerifyLoading, setIsVerifyLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://y-kappa-green.vercel.app/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsVerify(data.isVerified);
          setIsVerifyLoading(false);
        });
    }
  }, [email]);
  return [isVerify, isVerifyLoading];
};

export default useCheckVerify;
