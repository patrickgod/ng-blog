import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";

export class Interceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({ headers: this.getHeaders() });
    return next.handle(req);
  }

  getHeaders(): HttpHeaders {
    let token: string;
    if (typeof localStorage !== "undefined") {
      token = localStorage.token ? localStorage.token : "";
    }

    const headers: HttpHeaders = new HttpHeaders({
      Authorization: token
    });

    return headers;
  }
}
