import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Success() {
  const router = useRouter();
  const { transactionId, paymentAmount, paymentFee } = router.query;
  useEffect(() => {
    const url = "https://pay2.edokanpay.com/checkout-v2/verify";
    if(transactionId){
        fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              transaction_id: transactionId,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "data");
              window.open("/")
            })
            .catch((error) => {
              console.error("Error:", error);
            });
    }
  }, [transactionId]);
  return <div>success</div>;
}

export default Success;
