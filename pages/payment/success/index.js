import verifyPayment from "@/utils/verifyPayment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Success() {
  const router = useRouter();
  const { transactionId, email } = router.query;
  useEffect(() => {
    
    if(transactionId){
      verifyPayment({transactionId, email})
    }
  }, [transactionId]);
  return <div>success</div>;
}

export default Success;
