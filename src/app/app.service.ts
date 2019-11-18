import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    type: Observable<string>;

    private subject: Subject<string>;

    constructor() {
        this.subject = new Subject<string>();
        this.type = this.subject.asObservable();
    }

    setType(newValue) {
      this.type = newValue;
      this.subject.next(newValue);
    }
}