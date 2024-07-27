import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //18n Select
  public name: string = 'Jeremy'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    male: 'Sir',
    female: 'Lady'
  }

  changeClient(): void {
    this.name = 'Anna'
    this.gender = 'female'
  }

  //i18n Plural
  public clients: string[] = ['Naruto', ' Sasuke', ' Itachi', ' Kakashi', ' Sakura', ' Hinata', ' Shikamaru']
  public clientMap = {
    '=0': "don't have any clients waiting.",
    '=1': "have a client waiting.",
    '=2': "have 2 clients waiting.",
    'other': "have # clients waiting.",
  }

  deleteClient(): void {
    this.clients.shift()
  }

  //KeyValue Pipe
  public person = {
    name: 'Jeremy',
    age: 30,
    address: 'Madrid, Spain'
  }

  // Async Pipe

  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log('tap:', value))
  )

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'We have data in the promise' )
      console.log( 'We have data in the promise' )
      //this.person.name = 'Other name'
    }, 3500)
  })

}
