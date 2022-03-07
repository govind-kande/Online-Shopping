import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  orderAmount: number = parseInt(sessionStorage.getItem('orderAmount')!);
  paymentHandler: any = null;
  constructor() {}
  ngOnInit() {
    this.invokeStripe();
  }
  makePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KaDycSIUpktTk4J9g8E6CnSNd2qzR86js3j8ijpjqmgJjL5xbm8zx14hqORo3D47Y6v9ThBsT9QasZLwyLJsCS700GMc1zvEw',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Payment successfully done');
        sessionStorage.removeItem('cartProductArray');
    sessionStorage.removeItem('orderAmount');
        window.location.href=("home")
      },
    });
    paymentHandler.open({
      name: 'Order payment',
      description: '3 widgets',
      //amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KaDycSIUpktTk4J9g8E6CnSNd2qzR86js3j8ijpjqmgJjL5xbm8zx14hqORo3D47Y6v9ThBsT9QasZLwyLJsCS700GMc1zvEw',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
            this.router.navigate(['/home']);
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

}