// Promise = An object manages asynchronous operations wrap a promise object
//           around {asynchronous code} - "I promise to return a value"
//           new Promise ((resolve, reject) => {asynchronous code})

// function walkDog(callback){

//     // use setTimeout to make function asynchronous 
//     setTimeout(()=>{
//         console.log("You walk the dog 🐶")
//         callback()
//     }, 1500);
// }

// function cleanKitchen(callback){
 
//     setTimeout(()=>{
//         console.log("You clean the kitchen 🍽")
//         callback()
//     }, 2500);
// }

// function takeOutTrash(callback){
 
//     setTimeout(()=>{
//         console.log("You take the trash ♻")
//         callback()
//     }, 500);
// }

// Callback hell
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("You finishes all the chores!"))
//     });
// });

function walkDog(){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{

            const dogwalked = true;

            if(dogwalked){
                resolve("You walk the dog 🐶")
            }else{
                reject("You didn't walk the dog 🐶")
            }
            
        }, 1500);        
    })
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {

        setTimeout(()=>{

            const cleaned = true;

            if(cleaned){
                resolve("You clean the kitchen 🍽")
            }else{
                reject("You didn't clean the kitchen 🍽")
            }
        }, 2500);
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            
            const takeTrash = true

            if(takeTrash){
                resolve("You take the trash ♻")
            }else{
                reject("You didn't take the trash ♻")
            }
        }, 500);
    })
}

// if one promise didn't reject all promises after that don't run
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You take the trash ♻")})
         .catch(error => console.error(error));
