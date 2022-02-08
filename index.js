// console.log("hej");
// const hej = true;
// const variable = new Promise((resolve, reject) => {
//     if (hej === true) {
//         resolve('lyckat');

//     }
        
//     else {
//         reject('nejdu');
//     }
// });
// console.log(variable);


// function letsDance(danceStyle) {
//      return new Promise((resolve, reject) => {
//         if (danceStyle == 'polka') {
//             setTimeout(() =>{
//                 resolve('Skaka rumpa');
//             }, 2000);
//         }
//         else {
//             reject ('Talk to the hand');
//         }
//      });
//  }
//  letsDance('polka').then((res) => { 
//      console.log(res); 
//     }) 
//  .catch((res) => {
//      console.log(res);
// });

// const research = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('Research completed');
//     }, 4000);
// });
// const paperDesign = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('Paper design finished');
//     }, 2000);
// });
// const digitalDesign = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('Digital design finished');
//     }, 3000);
// });
// const getCoding = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('Code complete');
//     }, 3000);
// });
// const stackoverflowErrors = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('Errors on stack overflow');
//     }, 1000);
// });
// const testing = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('Testing completed');
//     }, 2000);
// });
// const celebrate = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('We did it!');
//     }, 1000);
// });

// research.then((value) => {
//     console.log(value);
// }).paperDesign().then((value) => {
//     console.log(value);
// }).digitalDesign.then((value) => {
//     console.log(value);
// }).getCoding.then((value) => {
//     console.log(value);
// }).stackoverflowErrors.then((value) => {
//     console.log(value);
// }).testing.then((value) => {
//     console.log(value);
// }).celebrate.then((value) => {
//     console.log(value);
// });

function doWebProject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done with research')
        }, 2000);
    });
}

doWebProject().then((result) => {
    console.log(result);
    return 'skissa upp design på papper';
}).then ((result)=>{
    console.log(result);
});