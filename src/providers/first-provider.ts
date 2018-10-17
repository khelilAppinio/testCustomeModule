
import { Injectable } from '@angular/core';

@Injectable()
export class FirstProvider {
    firstMethod() {
        return 'here is my first provider';
    }
}