import { Pipe, PipeTransform } from '@angular/core';

// jeremy | toggleCase = 'JEREMY'
// JEREMY | toggleCase = 'jeremy

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {
    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase()

  }
}
