import { Component , OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {PostService} from "./services/post.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
    // posts:any;
    menuMode = 'static';

    theme = 'absolution';

    inputStyle = 'outlined';

    ripple: boolean;

    constructor(private primengConfig: PrimeNGConfig) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.ripple = true;

    //     this.service.getPosts()
    //         .subscribe(response => {
    //             //console.log(response);
    //             this.posts = response;
    //         });
    }

}
