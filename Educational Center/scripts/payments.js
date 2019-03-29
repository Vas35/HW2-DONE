var paymentOneMonth = 3000,
    numberOfMonth = 3,
    certificate = true,
	fullPayment = true,	
    discount = 0;
var totalPayment = paymentOneMonth*numberOfMonth;
console.log('Payment for course:', totalPayment, 'uah.'); 

   if (fullPayment){
	   discount = 10;
   
      console.log('Discount for whole course:', discount + '%');
   }
   if (certificate){
	discount += 5
   console.log('Additional certificate discount 5%')	
   }
  totalPayment -= totalPayment*discount/100;  
  console.log('Payment with discount:', totalPayment, 'uah.'); 
   alert(totalPayment);
  
   
 