import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class PwaService {
    promptEvent;
    constructor(private swUpdate: SwUpdate) {
        window.addEventListener('beforeinstallprompt', event => {
            this.promptEvent = event;
        });
        // This works
        // window.addEventListener('appinstalled', (event) => {
        //     alert('App installed!');
        // });
        window.addEventListener('appupdated', (event) => {
            alert('App Update avable!');
        });
    }
}
