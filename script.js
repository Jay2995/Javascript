'use strict';




const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend', msg)
  countriesContainer.style.opacity = 1
}
const renderCountry = function (data, className = ''){
  const html = `
  <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
          <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
      </article>`
      countriesContainer.insertAdjacentHTML('beforeend', html)
      countriesContainer.style.opacity = 1
}
// ///////////////////////////////////////
// // const createNewCountry = function(country){
// const request = new XMLHttpRequest()

// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function(){
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText)
//     console.log(data);

//     const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//             <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//           </div>
//         </article>`
//         countriesContainer.insertAdjacentHTML('beforeend', html)
//         countriesContainer.style.opacity = 1

// })
// }

// createNewCountry('portugal')
// createNewCountry('spain')
// createNewCountry('bolivia')
// createNewCountry('brazil')




// }

// const getCountryAndNeighbour = function(country){
//   //Ajax call country 1
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
  
//       request.addEventListener('load', function(){
//       console.log(this.responseText);
//       const [data] = JSON.parse(this.responseText)
//       console.log(data);
//   //render country 1
//       renderCountry(data)
  
//     //get neighbour country 
//     const neighbour = data.borders?.[0]
//     console.log(neighbour);
    
//     if (!neighbour) return 
//       //Ajax call country 2
//     const request2 = new XMLHttpRequest()
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
    
//     request2.addEventListener('load', function(){
//      const [data2] = JSON.parse(this.responseText);
//      console.log(data2);
//      renderCountry(data2, 'neighbour')
//     })
      
//   })
//   }
// getCountryAndNeighbour('usa')

//Modern way of making AJAX calls using FETCH

//old way
// const request = new XMLHttpRequest()
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

//modern
// const request = fetch('https://restcountries.com/v3.1/name/${portugal}')
// console.log(request);

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(function(response){
//     console.log(response);
//     return response.json()
//   }).then(function(data){
//     console.log(data);
//     renderCountry(data[0])
//   })
// } 
// getCountryData('portugal');

// const getJSON = function (url, errorMsg = 'Something went wrong'){
//     return fetch(url).then(response => {
//     if(!response.ok)
//     throw new Error(`${errorMsg}(${response.status})`)
//      return response.json()
//   })
// }

// const getCountryData = function(country){
//   //country1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(response => {
//     if(!response.ok)
//     throw new Error(`country not found(${response.status})`)
//      return response.json()
//   })
//   // err=> alert(err)
//   .then(data => {
//     renderCountry(data[0])
//     // const neighbour = data[0].borders?.[0]
//       const neighbour = 'efwefwef'
//     if(!neighbour) return

//     //country2
//     return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//   })
//     .then(response => {
//       if(!response.ok)
//       throw new Error(`country not found(${response.status})`)
//        return response.json()
//     })
//     // err=> alert(err)
//     .then(data => {
//       [data] = data
//       renderCountry(data, 'neighbour')
//   })
//   .catch(error => {
//     console.error(`${error}***`)
//     renderError(`Something went wrong***${error.message} try again`)
//   })
//   .finally(() => {
//     countriesContainer.style.opacity = 1

//   })
//   // console.log(this.response.json);
// }
// btn.addEventListener('click', function(){
//   getCountryData('spain')
// })
// // // getCountryData('2423423424323')


// const getCountryData = function(country){



//   //country1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 
//   'Country not found')

//   .then(data => {
//     renderCountry(data[0])
//     const neighbour = data[0].borders?.[0]
//     // console.log(neighbour);
//       // const neighbour = 'efwefwef'
//     if(!neighbour) throw new Error('No neighbour found')

    
//     //country2
//     return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 
//     'Country not Found')
//   })


//     .then(data => {
//       [data] = data
//       renderCountry(data, 'neighbour')
//   })
//   .catch(error => {
//     console.error(`${error}***`)
//     renderError(`Something went wrong***${error.message} try again`)
//   })
//   .finally(() => {
//     countriesContainer.style.opacity = 1

//   })
//   // console.log(this.response.json);
// }





// btn.addEventListener('click', function(){
//   getCountryData('spain')
// })






// Asynchronous JavaScript
// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below)


// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)

///Coding Challange without refactoring
// const whereAmi = function(lat, lng){
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   .then(function(response) {
//     if(!response.ok) 
//     throw new Error(`Problem with geocoding ${response.status}`)
//     return response.json()
//   })
//   .then(function(data){
//     console.log(data);
//     console.log(`You are in ${data.city} in ${data.country}`);
//     return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//   })
//   .then(function(response){
//     if (!response.ok)
//     throw new Error(`Country not found${response.status}`)
//     return response.json()
//   })
//   .then(function(data){
//     renderCountry(data[0])
//   })
//   .catch(function(erro){
//     console.log(`${erro.message}**`);
//   })
//   }
  
//   whereAmi(52.508, 13.381)
//   whereAmi(19.037, 72.873)
//   whereAmi(-33.933, 18.474)

// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474

///Coding Challange
const whereAmI = function(lat, lng){
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  .then(res => {
    if (!res.ok)
    throw new Error(`Problem with geo, Error: ${res.status}`)
    return res.json()
  })
  .then(data => {
    console.log(data)
    console.log(`You are in ${data.city}, ${data.country}`);
    return fetch (`https://restcountries.com/v3.1/name/${data.country}`)
  })
  .then(res =>{
    if(!res.ok)
    throw new Error(`country not found ${res.status}`)
    return res.json()
  })
  .then(data => renderCountry(data[0]))
  .catch(err => console.log(`${err.message} ****`))
}

whereAmI(52.508, 13.381)