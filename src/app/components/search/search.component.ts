import { Artist } from '../../../../Artist';
import { SpotifyService } from '../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers:[SpotifyService]
})
export class SearchComponent {
    searchStr:string;
    searchRes: Artist[];

    constructor(private _spotifyService:SpotifyService){

    }

    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.artists.items;
            })
    }
}
