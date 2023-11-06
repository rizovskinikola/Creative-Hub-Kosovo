import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { AuthService } from '../../auth/auth.service';

import { environment } from 'src/environments/environment';
import { registerModel } from './navbar.model';

@Injectable()
export class NavbarService {
  api_url=environment.API_URL;

//   header // = this._authService.tokenHeader();

    constructor(private httpClient:  HttpClient,)
    {
     
    }

                //private url : string = this.api_url+'';
                 /**
     * Function to handle error when the server return an error
     *
     * @param error
     */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error("An error occurred:", error.error.message);
        } else {
          // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` + `body was: ${error.error}`
          );
        }
        // return an observable with a user-facing error message
        return throwError(error);
    }


    /**
     * Function for register
     *
     * @param {RejectCompanyModel} model
     */
    register(model : registerModel) : Observable<any>{
      return this.httpClient.post<any>(this.api_url + 'register',model).pipe(
        map(data => data),
        catchError(this.handleError)
      );
    }

      
}
