class Offer {
  constructor(response, checkinDate) {
    this.response = response;
    this.checkinDate = checkinDate;
  }
  getOffer() {
    //  Select suitable catagory offers
    let data = this.response.offers.filter((offer) => offer.category !== 3);
    // Select offers that are still valid
    let date = new Date(this.checkinDate);
    data = data.filter((offer) => {
      return new Date(offer.valid_to) - date > 4;
    });
    // If there is no valid offer, return :
    if (data.length == 0) {
      return { offers: "No valid offer" };
    }

    //Select optimum distance when having many merchants
    data = data.filter((offer) => {
      let nearestMer = offer.merchants.reduce((store, cur) => {
        if (store.distance > cur.distance) {
          return cur;
        } else {
          return store;
        }
      });
      offer.merchants = [nearestMer];
      return offer;
    });
    // Sorted the result by ascending distance value
    data = data.sort((a, b) => {
      return a.merchants[0].distance - b.merchants[0].distance;
    });
    // If the result length is 1 only, return the result immediately
    if (data.length == 1) {
      return data;
    } else {
      let newData = [];
      // Initialize categories to keep track of the categories
      let catagories = new Set();
      // Loop through the result, only add offers with differnt categories to the final result
      data.forEach((offer) => {
        if (newData.length === 2) {
          return newData;
        }
        if (!catagories.has(offer.category)) {
          newData.push(offer);
          catagories.add(offer.category);
        }
      });
      // If after trying to add offers in different categories to the final result, the catagories only has one value, add to the
      // final result the value of the second nearest offer
      if (catagories.size == 1) {
        newData.push(offer[1]);
      }
      return { offers: newData };
    }
  }
}
// This part is for testing the result of the offer.js file
// fetch(
//   "https://61c3deadf1af4a0017d990e7.mockapi.io/offers/near_by?lat=1.313492&lon=103.860359&rad=20"
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     let offer = new Offer(response, "1-1-1");
//     offer.getOffer();
//   });

module.exports = Offer;
