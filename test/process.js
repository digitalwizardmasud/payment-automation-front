$(document).ready(function() {
	$("#checkout_form").submit(function (e) {
		e.preventDefault();
		var cus_name = $("#full_name").val();
		var cus_email = $("#email_add").val();
		var amount = $("#amount").val();

		var apikey = ''; //Your Api Key
		var clientkey = ''; //Your Client Key
		var secretkey = ''; //Your Secret Key

		var success_url = 'http://localhost/edu/success.php';
		var cancel_url = 'http://localhost/edu/cancel.php';
		var hostname = 'https://example.com';

		jQuery.ajax({
		    type: "POST",		    
		    url: "https://pay.edokanpay.com/checkout.php",
			data: { "api": apikey, "client": clientkey, "secret": secretkey, "amount": amount, "position": hostname, "success_url": success_url, "cancel_url": cancel_url, "cus_name": cus_name, "cus_email": cus_email },
			success:function(response){
				location.href=response;
			}
		});
	});
});
