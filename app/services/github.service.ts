import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private userName: string;
    private client_id ='edd18bc7c8acbe1f4f01';
    private client_secret='cf5797edf81bfe1307f58e46f4701b558fd1d328';

    constructor(private _http: Http){
       console.log('Github Service Ready');
       this.userName='fbattig';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.userName + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }
}

