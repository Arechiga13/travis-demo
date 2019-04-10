import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class PwaService {
    promptEvent;
    constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
        this.swUpdate.available.subscribe(event => {
            const snack = this.snackbar.open('Update Available', 'Reload');

            snack
                .onAction()
                .subscribe(() => {
                window.location.reload();
            });

            // snack.setTimeout(() => {
            //     snack.dismiss();
            // }, 6000);
          });
        window.addEventListener('beforeinstallprompt', event => {
            this.promptEvent = event;
        });
        window.addEventListener('appinstalled', (event) => {
            alert('App installed!');
           });
    }
}
