import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { AdditemPage } from '../additem/additem.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public produits=[];


  constructor(private router:Router,public modal:ModalController, public alert:AlertController) {}
ngOnInit(){
  this.produits=[
    {titre:"produit1",description:"test1",prix:2000},
    {titre:"produit2",description:"test2",prix:3000},
     {titre:"produit3",description:"test3",prix:4000}
]
console.log(this.produits);
}

viewdetails(produit){
  let navgitionExtras: NavigationExtras={state:{item:produit}};
  this.router.navigateByUrl('itemdetails',navgitionExtras);
}

async openSecond(){
const modal=await this.modal.create({
  component: AdditemPage
});
  modal.onDidDismiss().then((item)=>{
  this.produits.push(item.data);
});
return await modal.present();
}

async presentAlertConfirm(produit) {
  const alert = await this.alert.create({
    header: 'Confirmation',
    message: 'vous pouvez vraiment supprimer ce produit?',
    buttons: [
      {
        text: 'Cancel',
        handler: (blah) => {
         
         }
        }
      , {
        text: 'Oui',
        handler: () => {
         this.supprimer(produit);
        }
       } ]
  });

  await alert.present();
}

 supprimer(produit) {
  let index=this.produits.indexOf(produit);
  this.produits.splice(index,1);

}

}
