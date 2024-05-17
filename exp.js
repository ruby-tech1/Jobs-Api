// const staff = [
//     {name: 'bob', age: 20, position: 'developer', salary: 100},
//     {name: 'jake', age: 22, position: 'analyst', salary: 250},
//     {name: 'peter', age: 25, position: 'designer', salary: 300},
//     {name: 'suzy', age: 30, position: 'the boss', salary: 400},
//     {name: 'anna', age: 35, position: 'intern', salary: 10},
// ]

const { report } = require("./routes/auth");

// const dailyTotal = staff.reduce((total, person) => {
//     console.log(total);
//     // console.log(person.salary);
//     total += person.salary
//     return total // return the first parameter
// }, 0)

// console.log(`Total is: ${dailyTotal}`);

// const cart = [
//     {
//         title: 'Samsung Galaxy S7',
//         price: 499.99,
//         amount: 1,
//     },
//     {
//         title: 'Google Pixel',
//         price: 699.99,
//         amount: 3,
//     },
//     {
//         title: 'Apple Iphone Xr',
//         price: 895.69,
//         amount: 6,
//     },
//     {
//         title: 'Xiommi',
//         price: 399.99,
//         amount: 2,
//     },
// ]

// let {totalItems, cartTotal} = cart.reduce((total, item) => {
//     const {price, amount} = item;
//     total.totalItems += amount;
//     total.cartTotal += parseFloat((amount * price).toFixed(1));
//     return total
// }, {
//     totalItems: 0,
//     cartTotal: 0,
// })

// // cartTotal = parseFloat(cartTotal.toFixed(2));

// console.log(`TotalItems is: ${totalItems}, Cart Total is: ${cartTotal}`);

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepo = async() => {
    const response = await fetch(url);
    const data = await response.json();
    
    const languageCount = data.reduce((total, repo) => {
        const {language} = repo;

        // if(language){
        //     if(total[language]){
        //         total[language] += 1 
        //     }else{
        //         total[language] = 1
        //     }
        // }

        if(language){
            total[language] = total[language] + 1 || 1
        }

        return total
    },{})
    console.log(languageCount);
}

fetchRepo();