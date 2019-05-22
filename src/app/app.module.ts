import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {YesNoService} from './yes-no.service';
import {CorpBsService} from './corp-bs.service';
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
  providers: [YesNoService, CorpBsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
