import {Component, Input, OnInit} from '@angular/core';
import {YesNoService} from '../yes-no.service';
import {YesNo} from '../yes-no';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  answer$: Observable<YesNo>;

  @Input()
  btnText = 'Get answer';

  constructor(private _yesNo: YesNoService) {

  }

  ngOnInit() {
  }

  getAnswer() {
    this.answer$ = this._yesNo.getAnswer();
  }
}
