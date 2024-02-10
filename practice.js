// let orders=[["1",5],["2",6]]

// let products=[
//     {
//         id:"2",
//         name:"Lipstick",
//     },
//     {
//         id:"1",
//         name:"Face Wash"
//     }
// ]

// for(let i=0; i<orders.length; i++){
//     for(let j=0; j<products.length; j++ ){
//         if(orders[i][0] === products[i].id){
//             products[i].amount=orders[i][1]
//         }else if(orders[i][0] === products[j].id){
//             products[j].amount= orders[i][1]
//         }else{
//             continue
//         }
//     }
// }
// console.log(products);

let orders = [
  ["1", 5],
  ["2", 6],
];

let products = [
  {
    id: "2",
    name: "Lipstick",
  },
  {
    id: "1",
    name: "Face Wash",
  },
];

function getData(orders, products) {
  let newArray = [];
  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (orders[i][0] === products[i].id) {
        // products[i].amount=orders[i][1]
        newArray.push({
          ...products[i],
          amount: orders[i][1],
        });
      } else if (orders[i][0] === products[j].id) {
        // products[j].amount= orders[i][1]
        newArray.push({
          ...products[j],
          amount: orders[i][1],
        });
      } else {
        continue;
      }
    }
  }
  return newArray;
}
console.log(getData(orders, products));
