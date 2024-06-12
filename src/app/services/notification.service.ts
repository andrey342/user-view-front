import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notify = new Subject<void>(); // Subject para notificaciones

  notifyObservable$ = this.notify.asObservable(); // Observable para suscribirse a notificaciones

  // Método para notificar completado
  notifyCompletion() {
    this.notify.next(); // Emitir notificación de completado
  }
}
