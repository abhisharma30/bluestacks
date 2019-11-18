import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  constructor() {}
  transform(value, type) {
    const currentTime = new Date().getTime();
    if(type === 'past') {
      return value.filter(i => currentTime - i.createdOn > 24 * 60 * 60 * 1000);
    } else if(type === 'live') {
      return value.filter(i => Math.abs(currentTime - i.createdOn) < 24 * 60 * 60 * 1000);
    } else if(type === 'upcoming') {
      return value.filter(i => i.createdOn - currentTime  > 24 * 60 * 60 * 1000);
    }
    return [];
  }
}