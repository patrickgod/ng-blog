import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token: string;
    if (typeof localStorage !== "undefined") {
      token = localStorage.token ? localStorage.token : "";
    }

    const headers: HttpHeaders = new HttpHeaders({
      Authorization: token
    });

    if (token) {
      req = req.clone({ headers });
    }

    return next.handle(req);
  }
}
