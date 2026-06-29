"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const imageContainer = document.querySelector(".images");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const renderCountry = function (country, className = "") {
  const html = ` <article class="country ${className}">
          <img class="country__img" src="${country.flag.url_svg}" />
          <div class="country__data">
            <h3 class="country__name">${country.names.common}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span>${(+country.population / 1000000).toFixed(1)}M</p>
            <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);

  //   countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

// const getCountryAndNeighbour=function(country){
// const request=new XMLHttpRequest();
// request.open(
//     "GET",
//     `https://api.restcountries.com/countries/v5?q=${country}`,
//     true
// );

// request.setRequestHeader(
//     "Authorization",
//     "Bearer rc_live_fa6722fbe0a04c03896e91b097cc183f"
// );

// request.send();
// // console.log(this.responseText);
// request.addEventListener('load', function(){
//     const response=JSON.parse(this.responseText);
//     const country=response.data.objects[0];
//     console.log(country);

//     //Render Country
//     renderCountry(country);

//     //Get neighbouring country
//     const [neighbour]=country.borders;
//     // console.log(neighbour);

//     if(!neighbour) return;

//     const request2=new XMLHttpRequest();
// request2.open(
//     "GET",
//     `https://api.restcountries.com/countries/v5/code?q=${neighbour}`,
//     true
// );

// request2.setRequestHeader(
//     "Authorization",
//     "Bearer rc_live_fa6722fbe0a04c03896e91b097cc183f"
// );

// request2.send();
// request2.addEventListener('load',function(){
//     const response2=JSON.parse(this.responseText);
//     const country2=response2.data.objects[0];
//     console.log(country2);
//     renderCountry(country2,'neighbour');
// })

// })
// }

// getCountryAndNeighbour('afghanistan');
// getCountryData('china');
// getCountryData('bangladesh');
// getCountryData('India');
// getCountryData('bhutan')
// getCountryData('argentina');
// getCountryData('japan');
// getCountryData('korea');

const getJSON = function (url, key) {
  return fetch(url, { headers: { Authorization: key } }).then((response) => {
    return response.json();
  });
};

// const getCountryData = function (country) {
//   getJSON(
//     `https://api.restcountries.com/countries/v5?q=${country}`,
//     "Bearer rc_live_fa6722fbe0a04c03896e91b097cc183f",
//   )
//     .then((data) => {
//       // console.log(data.data.objects[0]);
//       if (data.data.objects.length === 0) {
//         throw new Error("Country not found");
//       }
//       renderCountry(data.data.objects[0]);
//       const neighbour = data.data.objects[0].borders?.[0];
//       console.log(neighbour);
//       if (!neighbour) throw Error('No neighbour found');

//       //Country 2
//       return getJSON(
//         `https://api.restcountries.com/countries/v5/code?q=${neighbour}`,
//         "Bearer rc_live_fa6722fbe0a04c03896e91b097cc183f",
//       );
//     })
//     .then((data) => {
//       if (data.data.objects.length === 0) {
//         throw new Error("Country not found");
//       }
//       renderCountry(data.data.objects[0], "neighbour");
//     })
//     .catch((err) => {
//       console.log(err);
//       renderError(`Something went wrong! ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("nepal");
// });
// getCountryData("fgddhhkjhhkkj");

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//   )
//     .then((response) => {
//         console.log(response);
//         if(!response.ok){
//             throw new Error(`Problem with geocoding ${response.status}`);
//         }
//         return response.json()})
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       return getJSON(`https://api.restcountries.com/countries/v5?q=${data.countryName}`,
//         "Bearer rc_live_fa6722fbe0a04c03896e91b097cc183f")
//     }) .then((data) => {
//       console.log(data.data.objects[0]);
//       if (data.data.objects.length === 0) {
//         throw new Error("Country not found");
//       }
//       renderCountry(data.data.objects[0])})
//     .catch((err) => {console.log(err.message)
//       renderError(`Something went wrong! ${err.message}. Try again`);
//     }).finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037,72.873);
// whereAmI(-33.933,18.474)

// console.log("Test Start");
// setTimeout(()=>console.log('0 sec timer',0));
// Promise.resolve('Resolved promise 1').then(res=>console.log(res));
// Promise.resolve('Resolved promise 2').then(res=>{
//   for(let i=0;i<10000000000;i++){

//   }
//   console.log(res);
// })
// console.log('Test end');

// const lotteryPromise=new Promise(function(resolve,reject){
//   console.log("Lottery draw is happening!");
//   setTimeout(function(){
//     if(Math.random()>=0.5){
//     resolve('You win money!');
//   }else{
//     reject(new Error("You lost money!"));
//   }},2000)

// });

// lotteryPromise.then(res=>console.log(res)).catch(err=>console.log(err));

//Prmisifying setTimeout
// const wait = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log("1 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("4 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("5 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("6 seconds passed");
//     return wait(1);
//   });

//----------------callback hell--------------
// setTimeout(()=>{
//  console.log('1 seconds passed');
//  setTimeout(()=>{
//   console.log("2 seconds passed");
//   setTimeout(()=>{
//     console.log("3 seconds passed");
//     setTimeout(()=>{
//       console.log("4 seconds passed");
//     },1000);
//   },1000);
//  },1000);
// },1000);

//Immediate resolve and reject
// Promise.resolve('abc').then(x=>console.log(x));
// Promise.reject(new Error('Problem!')).catch(x=>console.error(x));

// navigator.geolocation.getCurrentPosition(position=>console.log(position),err=>console.log(err));
// console.log("getting position:"); //this is executed first

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(position=>resolve(position),err=>reject(err))
//     //-----------------same same----------------------------------
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then(pos=>console.log(pos.coords.latitude));

// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       console.log(pos.coords);
//       const { latitude, longitude } = pos.coords;
//       // console.log(lat,lng);
//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
//       );
//     })
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Problem with geocoding ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       return getJSON(
//         `https://api.restcountries.com/countries/v5?q=${data.countryName}`,
//         "Bearer rc_live_fa6722fbe0a04c03896e91b097cc183f",
//       );
//     })
//     .then((data) => {
//       console.log(data.data.objects[0]);
//       if (data.data.objects.length === 0) {
//         throw new Error("Country not found");
//       }
//       renderCountry(data.data.objects[0]);
//     })
//     .catch((err) => {
//       console.log(err.message);
//       renderError(`Something went wrong! ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click',whereAmI);

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImage;
createImage("img/img-1.jpg")
  .then((img) => {
    currentImage = img;
    console.log("image 1 is loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImage = img;
    console.log("image 2 is loaded");
    return wait(2);
  }).then(() => {
    currentImage.style.display = "none";
    return createImage("img/img-3.jpg");
  }).then((img) => {
    currentImage = img;
    console.log("image 3 is loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";})
  .catch((err) => console.error(err));
