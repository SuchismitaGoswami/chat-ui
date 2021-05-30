import { Component, Input } from '@angular/core';
import { AdComponent }      from './ad.component';

const potentialUserInput = `
  <!--
    Here is where we add user input to the teamplte:    
  -->
  Hello
  <img src="x" onError="javascript:console.log({cookie: window.document.cookie})"/>
`

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  ` + potentialUserInput
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
