import { Component } from '@angular/core';
import {Points} from './points';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    points: Points;

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
