import { Component, OnInit } from '@angular/core';
import {Points} from './points';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
    points: Points;
    fredSays: string;
    fredSays$ = new BehaviorSubject<string>();
    private fredsSayings: string[] = [
        'The thing is',
        'Basically',
        'Essentially',
        'Due to',
        'Briefly',
        'Because of',
        'Here\'s why',
        'To explain',
        'The explanation is',
        'The problem is',
        'Unfortunately',
        'However',
        'In a nutshell',
        'Owing to',
        'Considering'
    ];

    ngOnInit() {
        this.askFred();
    }

    askFred() {
        this.fredSays = this.fredsSayings[this.getRandomInt(0, this.fredsSayings.length)];
        this.fredSays$.next(this.fredSays);
    }

    calculatePoints() {
        const enumValues = Object.keys(Points)
            .map(n => Number.parseInt(n, 10))
            .filter(n => !Number.isNaN(n));
        const randomIndex = this.getRandomInt(0, enumValues.length);
        this.points = enumValues[randomIndex];
    }

    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
    }
}
