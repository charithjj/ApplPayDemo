import { Component } from '@angular/core';

import { WindowRef } from './WindowRef';

//import * as variable from 'applePayButton'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApplPayDemo';

  constructor(private winRef:WindowRef)
  {
    console.log('Window object', winRef.nativeWindow);    

    if (winRef.nativeWindow.ApplePaySession) {

      console.log("apple session found");
      // var merchantIdentifier = 'example.com.store';
      // var promise = winRef.nativeWindow.ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
    }
    else
    {
      console.log("apple session not found");
    }
  }  
}

