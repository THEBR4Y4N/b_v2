import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {ProyectoInterface} from '../models/proyecto';
import { Observable } from 'rxjs/internal/observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs:AngularFirestore) { 
    this.proyectoCollection=afs.collection<ProyectoInterface>('proyectos');
    this.proyectos=this.proyectoCollection.valueChanges();
  }
  private proyectoCollection:AngularFirestoreCollection<ProyectoInterface>;
  private proyectos:Observable<ProyectoInterface[]>;

  getAllProyecto(){ 
    return this.proyectos=this.proyectoCollection.snapshotChanges()
    .pipe(map(changes =>{
      return changes.map(action=>{
        const data = action.payload.doc.data()as ProyectoInterface;
        data.id=action.payload.doc.id;
        return data;
      });
    }));
   }
  addProyecto(){  }
  updateProyecto(){ }
  deleteProyecto(){ }

}
