import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

product= [{productName:"Nike", productPrice:"R500",productDescription:"Just Do It",productImage:"https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }, 
 {productName:"Puma", productPrice:"R600",productDescription:"we are Forever Faster",productImage:"https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
 {productName:"Adidas", productPrice:"R800",productDescription:"Adidas is all in",productImage:"https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
 {productName:"Rebook", productPrice:"R300",productDescription:"I am what I am",productImage:"https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwadf35103/images/56602301/Rebel_56602301_white_hi-res.jpg?sw=1000&sh=1000&sm=fit" },
   
   
    ]
    }
    