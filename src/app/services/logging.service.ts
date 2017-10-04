import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {
  log(status) {
    console.log('A server status changed, new status: ' + status);
  }
}
