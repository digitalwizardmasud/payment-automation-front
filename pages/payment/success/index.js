import verifyPayment from "@/utils/verifyPayment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Success() {
  const router = useRouter();
  const { transactionId, paymentAmount, email } = router.query;
  useEffect(() => {
    
    if(transactionId){
      verifyPayment({transactionId, paymentAmount, email})
    }
  }, [transactionId]);
  return <div>success</div>;
}

export default Success;
