import { Component, OnInit } from '@angular/core';
import { System } from '@faker-js/faker/system';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dogspa-front';
  seccion = '';

  constructor(){}
  ngOnInit(): void {

  }


  setBoldElem(idEle:string):void
  {
    var element = document.getElementById(idEle);
    if (element != null)
    {
      var elementA = document.getElementById(this.seccion);

      if (elementA != null)
      {
        elementA.style.textDecoration = 'none';

        elementA.style.fontWeight = '400';
      }

      this.seccion = idEle;
      element.style.fontWeight = 'bold';
      element.style.textDecoration = 'underline';
    }



  }




}
