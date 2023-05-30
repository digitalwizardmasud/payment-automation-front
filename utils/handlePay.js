const apiKey = process.env.EDokan_API
const clientKey = process.env.EDokan_CLIENT
const secretKey = process.env.EDokan_SECRET

const handlePay=({name, email, amount})=> {
    const url = "https://pay2.edokanpay.com/checkout-v2/create";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        api: apiKey,
        client: clientKey,
        secret: secretKey,
        amount,
        position:'https://masud.foowork.com',
        cus_name: name || "No Name",
        cus_email: email || "No Email",
        success_url: 'http://localhost:3000/success?email='+email,
        cancel_url: 'http://localhost:3000/cancel?email='+email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
       if(data.edokanpayURL){
        window.open(data.edokanpayURL)
       }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  export default handlePay

