import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private matSnackBar: MatSnackBar) { }

  show(message:string){
    this.matSnackBar.open(message,'kapat',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
