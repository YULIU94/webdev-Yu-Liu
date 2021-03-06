import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()

export class PageService {

  baseUrl: String;
  constructor(private http: Http) {
    this.baseUrl = environment.baseUrl;
  }

  // pages = [];

   createPage(websiteId, page) {
     const url = this.baseUrl + 'api/website/' + websiteId + '/page';
     return this.http.post(url, page)
       .map((response: Response) => {
         return response.json();
       });
    }

  findAllPagesForWebsite(websiteId) {
    const url = this.baseUrl + 'api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

   findPageById(pageId) {
     const url = this.baseUrl + 'api/page/' + pageId;
     return this.http.get(url)
       .map((response: Response) => {
         return response.json();
       });
  }

   updatePage(pageId, page) {
     const url = this.baseUrl + 'api/page/' + pageId;
     return this.http.put(url, page)
       .map((response: Response) => {
         return response.json();
       });
  }

   deletePage(pageId) {
     const url = this.baseUrl + 'api/page/' + pageId;
     return this.http.delete(url)
       .map((response: Response) => {
         return response.json();
       });
    }
}
