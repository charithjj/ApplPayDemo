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

    if ((winRef.nativeWindow as any).ApplePaySession && (winRef.nativeWindow as any).ApplePaySession.canMakePayments())
      {
        console.log("apple session can make payments");
        this.messageInfo = "apple session can make payments";
      }
    else
    {
      console.log("apple session not found. can not make payments");
      this.messageInfo = "apple session not found. can not make payments";
    }
    if ((winRef.nativeWindow as any).ApplePaySession) {

      console.log("apple session found");
      this.messageInfo = "apple session found";
      // var merchantIdentifier = 'example.com.store';
      // var promise = winRef.nativeWindow.ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
    }
    else
    {
      console.log("apple session not found");
    }
  }
  
  
  // function onApplePayButtonClicked() { 

  //   if (!ApplePaySession) {
  //       return;
  //   }
  // }
}



