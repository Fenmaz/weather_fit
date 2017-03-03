import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
import {ClothingItem} from "./clothing-item";

/*
  Generated class for the ClothingDataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ClothingDataService {

  constructor(public storage: Storage) {
    // this.initialize();
    // console.log("Initialized db");
  }

  getData() {
    // return new Promise( (resolve) =>
    //   this.storage.get("ClothingData")
    //     .then((data) = > resolve(data))) ;
    return this.storage.get("ClothingData");
  }

  save(data: Object) {
    this.storage.set("ClothingData", data)
      .catch((error) => "Failed to store data");
  }

  initialize() {
    let items = {
      "top": [
        new ClothingItem("basketball-jersey", "../../assets/clothing/basketball-jersey.png",
          {"warm" : 8, "cold" : 1, "rain" : 0})
        ,
        new ClothingItem("hoodie", "../../assets/clothing/hoodie.png",
          {"warm" : 4, "cold" : 6, "rain" : 5})
        ,
        new ClothingItem("puffy-jacket", "../../assets/clothing/puffy%20jacket.png",
          {"warm" : 1, "cold" : 9, "rain" : 7})
      ]
      ,
      "bottom": [
        new ClothingItem("sport-shorts", "../../assets/clothing/sport%20shorts.png",
          {"warm" : 9, "cold" : 2, "rain" : 4})
        ,
        new ClothingItem("jeans", "../../assets/clothing/jeans.png",
          {"warm" : 7, "cold" : 7, "rain" : 8})
      ]
      ,
      "accessories": [
        new ClothingItem("sneakers", "../../assets/clothing/double%20sneakers.png",
          {"warm" : 7, "cold" : 7, "rain" : 5})
        ,
        new ClothingItem("uggs", "../../assets/clothing/double%20brown%20uggs.png",
          {"warm" : 4, "cold" : 8, "rain" : 3})
        ,
        new ClothingItem("timberlands", "../../assets/clothing/double%20timberlands.png",
          {"warm" : 1, "cold" : 10, "rain" : 7})
      ]
    };

    this.save(items);
  }
}
