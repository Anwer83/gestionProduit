import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.page.html',
  styleUrls: ['./itemdetails.page.scss'],
})
export class ItemdetailsPage implements OnInit {
  public titre:string;
  public description:string;
  public prix:number;

  constructor(private route:ActivatedRoute, private router:Router) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        let produit=this.router.getCurrentNavigation().extras.state.item;
        if(produit){
          this.titre =produit.titre;
          this.description =produit.description;
          this.prix =produit.prix;
        }
      
      }
    });
   }

  ngOnInit() {

  }

}
