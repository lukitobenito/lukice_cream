import { Component, OnInit } from '@angular/core';

interface User {
  first_name: string;
  image_link: string;
  price: number;
  inCart?: number;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  searchText: string = '';
  users: User[] = [
    {"first_name":"მალტესერსი","image_link":"https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Maltesers-McFlurry-2:1-3-product-tile-desktop?wid=829&hei=515&dpr=off","price":3.50,},
    {"first_name":"სმარტის","image_link":"https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-smarties-mcflurry-allergen:1-3-product-tile-desktop?wid=829&hei=515&dpr=off","price":2,},
    {"first_name":"ტვიქსი","image_link":"https://mcdonalds.gr/wp-content/uploads/2019/03/McFlurry-Twix.jpg","price":7,},
    {"first_name":"კარამელი","image_link":"https://people.com/thmb/9Cpu8JZGiHKbbId1qXOVwJHno40=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(734x469:736x471)/mcdonalds-ed0f52b9dea0419897711ea672af2fb0.jpg","price":10,},
    {"first_name":"ორეო","image_link":"https://i.pinimg.com/originals/5d/7a/2a/5d7a2a62094bf7ec1e66513a3d295066.png","price":6,},
    {"first_name":"მინი მაკფლარი","image_link":"https://assets.heart.co.uk/2018/24/mini-mcflurry-flake-1529663357.png","price":12,},
    {"first_name":"კიტ-კეტი","image_link":"https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2020/02/93052682e29e96d3282764d18bd6a0bf.jpg","price":10,},
    {"first_name":"სნიკერსი","image_link":"https://hips.hearstapps.com/hmg-prod/images/mcflurry-snickers-2033383452589073a7547ff-7-1566838680.jpg?resize=480:*","price":3,},
    {"first_name":"ტირამისუ","image_link":"https://static.independent.co.uk/2022/06/06/11/newFile-5.jpg","price":13,},
    {"first_name":"მონაკო მარწყვი","image_link":"https://nikorasupermarket.ge/modules/exclusive_products/uploads/step_1/320.png","price":6,},
    {"first_name":"კორნეტო შოკოლადი","image_link":"https://glovo.europroduct.ge/eupr/erpimages/0A7578D55E/6FF5104AE6AB496F9C521CFBED601AF0_8690637820021.jpg","price":5,},
    {"first_name":"მონაკო ბრაუნი","image_link":"https://apex.nikoratrade.ge/erpimages/DDC80552C8/6CEC36B26FDD4E44833C8B6662D39DDD_4823086103610.jpg","price":7,},
    {"first_name":"ვანილის ნაყინი","image_link":"https://check24.ge/storage/gastronomy/257/YBW9vLtc5g6Bj10aB8z6FZGzfR5Tuvi75N294E3r.jpeg","price":12,},
    {"first_name":"შოკოლადის ნაყინი","image_link":"https://business-partner.ge/storage/13001/265586426_877133002982975_9037386669360539054_n.jpg","price":12,},
    {"first_name":"ალუბლის ნაყინი","image_link":"https://georgiatoday.ge/wp-content/uploads/2022/11/GT-%E1%83%91%E1%83%98%E1%83%9D-1.jpg","price":11,},
    {"first_name":"საოჯახო შოკოლადი","image_link":"https://media.istockphoto.com/id/471839283/photo/ice-cream-box.jpg?s=612x612&w=0&k=20&c=9OpRflKjXb0YqWAbXCGTG5ig0_QkHS9u30N9ycub7XE=","price":16,},
    {"first_name":"ბარამბო ანანასი","image_link":"https://www.barambo.ge/wp-content/uploads/2021/08/11.png","price":10,},
    {"first_name":"ბარამბო მარწყვი","image_link":"https://www.barambo.ge/wp-content/uploads/2021/08/12.png","price":12,},
    {"first_name":"საოჯახო ხილის","image_link":"https://www.barambo.ge/wp-content/uploads/2021/08/5000ml-mocxari-panakota-jolo.png","price":25,},
    {"first_name":"საოჯახო მიქსი","image_link":"https://www.barambo.ge/wp-content/uploads/2021/08/5000ml-shokoladi-vanili-biskotino.png","price":27,},
    {"first_name":"საოჯახო ვანილის","image_link":"https://www.barambo.ge/wp-content/uploads/2021/08/5000ml-vanili.png","price":24,},
  ];
  filteredUsers: User[] = [];
  cart: User[] = [];
  showCart: boolean = false;
  toggleCart: boolean = false;

  ngOnInit() {
    this.filteredUsers = this.users;
  }

  searchByName(): void {
    this.filteredUsers = this.users.filter((user) =>
      user.first_name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addToCart(user: User): void {
    const existingUser = this.cart.find((item) => item.first_name === user.first_name);
    if (existingUser) {
      existingUser.inCart = (existingUser.inCart || 0) + 1;
    } else {
      this.cart.push({ ...user, inCart: 1 });
    }
  
    this.showCart = true; // Set showCart to true when an item is added to the cart
  }

  removeFromCart(user: User): void {
    const existingUser = this.cart.find((item) => item.first_name === user.first_name);
    if (existingUser) {
      existingUser.inCart = (existingUser.inCart || 0) - 1;
      if (existingUser.inCart === 0) {
        const index = this.cart.indexOf(existingUser);
        this.cart.splice(index, 1);
      }
    }
  }

  getSummaryPrice(): number {
    return this.cart.reduce((total, item) => total + (item.price * (item.inCart || 0)), 0);
  }

  pay(): void {
    // Implement the logic for payment
  }
}