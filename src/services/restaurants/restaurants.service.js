import { mocks } from "./mock";

export const RestaurantsRequest = (location = "41.878113,-87.62979956") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if(!mock) reject('Not found');

     resolve(mock);
  })
}

RestaurantsRequest().then((result) => {
  console.log(result);
}).catch((err) => {
  console.log('error papi: ' + err)
});
