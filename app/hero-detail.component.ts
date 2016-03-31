import {Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';
import {Hero} from './hero';
import basePath from './basepath.constant';

@Component({
    selector: 'my-hero-detail',
    templateUrl: basePath('hero-detail.component.html'),
    styleUrls: [basePath("hero-detail.component.css")],
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }
    
    goBack() {
        window.history.back();
    }
    
    ngOnInit() {
        // + converts the string value of this to a number
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
}