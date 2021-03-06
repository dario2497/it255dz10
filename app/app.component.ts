import {Component} from 'angular2/core';
import {RouteConfig,Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent } from 'app/home/home.component';
import {GalleryComponent } from 'app/gallery/gallery.component';
import {Pipe} from 'angular2/core';

@Component({
    selector: 'my-app',
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path:'/gallery', name:'Gallery', component: GalleryComponent},
])

export class AppComponent { 
	
}
