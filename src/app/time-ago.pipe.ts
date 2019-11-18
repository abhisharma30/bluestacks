import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}
  transform(value: string) {
    const d = new Date(parseInt(value, 0));
    const now = new Date();
    const seconds = Math.round((now.getTime() - d.getTime()) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    if (Number.isNaN(seconds)) {
      return '-';
    } else {
        if(days === 0) return this.translate.instant('live');
        return Math.abs(days) + (days === 1 || days === -1 ? ' ' + this.translate.instant('day') : ' ' + this.translate.instant('days')) + (days > 0 ? ' ' + this.translate.instant('ago') : ' ' + this.translate.instant('ahead'));
    }
  }
}
