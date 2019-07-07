import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {NotesService} from './services/notes.service';
import {MatSnackBar} from '@angular/material';
import {AuthService} from './services/auth.service';
import {MessagingService} from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'pwa';
  panelOpenState = false;
  categories: any = ['trabajo', 'personal'];
  note: any = {};
  notes: any = [];
  message: any = {};
  constructor(private swUpdate: SwUpdate, private noteService: NotesService, private snackBar: MatSnackBar,
              public authService: AuthService, public messagingService: MessagingService) {
    this.noteService.getNotes().valueChanges().subscribe((resp) => {
      this.notes = resp;
    });
    this.messagingService.getPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        window.location.reload();
      });
    }
  }

  saveNote() {
    this.note.id = (this.note.id) ? this.note.id : Date.now();
    this.noteService.storeNote(this.note).then(() => {
      this.note = {};
      this.snackBar.open('Nota guardada', null, {
        duration: 2000,
      });
    });
  }

  selectNote(note) {
    this.note = note;
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id).then(() => {
      this.note = {};
      this.snackBar.open('Nota eliminada', null, {
        duration: 2000,
      });
    });
  }

  login() {
    this.authService.loginWithGoogle().then((resp) => {
      this.snackBar.open('Bienvenid@!!', null, {
        duration: 2000,
      });
      console.log(resp);
    });
  }

  logout() {
    this.authService.logout().then((resp) => {
      this.snackBar.open('Adios!!', null, {
        duration: 2000,
      });
      console.log(resp);
    });
  }

}
