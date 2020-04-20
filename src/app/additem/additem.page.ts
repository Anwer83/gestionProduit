import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage implements OnInit {
public titre:string;
public description:string;
public prix:number;
  constructor(public modal:ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modal.dismiss();
  }
  saveitem(){
    let newitem={
      titre:this.titre,
      description:this.description,
      prix:this.prix
    }
this.modal.dismiss(newitem);
  }

}
