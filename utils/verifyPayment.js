const verifyPayment = ({transactionId, email}) => {
    fetch("https://pay2.edokanpay.com/checkout-v2/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          transaction_id: transactionId,
        }),
      })
        .then((res) => res.json())
        .then(({statusCode, paymentID, transactionAmount}) => {
          if(statusCode==1){
            console.log(paymentID, 'paymentID');
            console.log(paymentAmount, 'amount');
            console.log(email, 'email');
            console.log(transactionAmount, 'trans amount');
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
}

export default verifyPayment