import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'jeremy'
  public nameUpper: string = 'JEREMY'
  public fullname: string = 'jErEmY lAgOs'

}
