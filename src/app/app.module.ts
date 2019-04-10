import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PwaService } from './pwa.service';

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule, HttpClientModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [PwaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
