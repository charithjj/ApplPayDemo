import { Component } from '@angular/core';

import { WindowRef } from './WindowRef';

import { WindowRefService, ICustomWindow } from './WindowRefService';

//import * as variable from 'applePayButton'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApplPayDemo';
  messageInfo = "Hello World"

  private _window: ICustomWindow;

  //constructor(private winRef:WindowRef)
  constructor(winRef: WindowRefService)
  {
    this._window = winRef.nativeWindow;
    
    console.log('Window object', winRef.nativeWindow);    
    console.log('ApplePay Session', (winRef.nativeWindow as any).ApplePaySession);   

    if ((winRef.nativeWindow as any).ApplePaySession)// && (winRef.nativeWindow as any).ApplePaySession.canMakePayments())
    {
      console.log("apple session available for ApplePayJS.");
      this.messageInfo = "apple session available for ApplePayJS.";
    }
    else
    {
      console.log("apple session not found for ApplePayJS.");
      this.messageInfo = "apple session not found for ApplePayJS.";
    }
    // if ((winRef.nativeWindow as any).ApplePaySession) {

    //   console.log("apple session found");
    //   this.messageInfo = "apple session found";
    //   // var merchantIdentifier = 'example.com.store';
    //   // var promise = winRef.nativeWindow.ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
    // }
    // else
    // {
    //   console.log("apple session not found");
    // }

    this.ApplePayApiTest();
  }
  
  public ApplePayApiTest() {
    if (!(this._window as any).ApplePaySession) 
    {
      console.log("apple session not found for ApplePayAPI.");
      this.messageInfo = this.messageInfo + "    : apple session not found for ApplePayAPI.";
      return;
    }
    else
    {
      console.log("apple session available for ApplePayAPI.");
      this.messageInfo = this.messageInfo + "   :apple session available for ApplePayAPI.";
    }
  
    // Define ApplePayPaymentRequest
    const request = {
        "countryCode": "US",
        "currencyCode": "USD",
        "merchantCapabilities": [
            "supports3DS"
        ],
        "supportedNetworks": [
            "visa",
            "masterCard",
            "amex",
            "discover"
        ],
        "total": {
            "label": "Demo (Card is not charged)",
            "type": "final",
            "amount": "1.99"
        }
    };
    
    // Create ApplePaySession
    const session = new (this._window as any).ApplePaySession(3, request);

    
  }
}



