import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostItemComponentComponent } from './post-item-component/post-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
