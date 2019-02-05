import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {YesNoService} from './yes-no.service';
import {HttpClientModule} from '@angular/common/http';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [YesNoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
