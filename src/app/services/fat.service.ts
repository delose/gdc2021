import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BraapSearchParkBeginner } from './braap-search-park-beginner';

@Injectable({
    providedIn: 'root'
})
export class FatService {

    constructor(private http: HttpClient) { }

    // braapDB 00 / day + $0.01 each other

    mockSearchForParks() {

        // let requestUrl = "https://newscatcher.p.rapidapi.com/v1/search";
        
        // var httpParams: HttpParams = new HttpParams()
        //     // .set('lang', language)
        //     .set('q', topic)
        //     // .set('topic', category === "All" ? "" : category)
        //     // .set('sources', source === "All" ? "" : source)
        //     .set('page_size', "1")
        //     // .set('sort_by', "relevancy") // relevancy, rank, date
        //     .set('page', page)
        //     .set('media', "true")
        //     // .set('country', country)
        //     ;
        //     let httpHeaders: HttpHeaders = new HttpHeaders()
        //         .set('Authorization', 'mMMc49LAZkrfmMGxreyJ6SuuWKSY4Jt3oidBRBYdOVY')
        //         .set('x-rapidapi-key', '308fee2777mshd9deaf3e6f7a1ecp1b5377jsn8665068261ea')
        //         .set('x-rapidapi-host', 'brappdbv2.p.rapidapi.com');
        //         // .set('useQueryString', 'true');
    
            return this.http.get<BraapSearchParkBeginner>("assets/json/braap-search-park-exp-level-beginner.json", {headers: new HttpHeaders(),  params: new HttpParams()});
    }
}
