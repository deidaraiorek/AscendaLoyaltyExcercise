const Offer = require("./offer");
const { getRes } = require("./response");
describe("Check if the result is the same to the sample result", () => {
  let offerData;
  let offer;
  let checkinDate;
  beforeEach(async () => {
    const offersResponse = await getRes();
    checkinDate = "2019-12-25";
    offerData = new Offer(offersResponse, checkinDate);
    offer = offerData.getOffer().offers;
  });

  test("the result should contain 2 offers", () => {
    expect(offer).toHaveLength(2);
  });
  test("the result's dates are still valid", () => {
    offer.forEach((offer) => {
      validDate = new Date(offer.valid_to);
      expect(validDate - new Date(checkinDate)).toBeGreaterThan(4);
    });
  });
  test("the result should have offer in differnt categories", () => {
    let cate = new Set();
    offer.forEach((offer) => {
      cate.add(offer.category);
    });
    expect([...cate]).toHaveLength(2);
  });
  test("the result should have offer's distance in ascending order", () => {
    console.log(offer);
    for (i = 1; i < offer.length; i++) {
      expect(offer[i].merchants[0].distance).toBeGreaterThanOrEqual(
        offer[i - 1].merchants[0].distance
      );
    }
  });

  test("sample result accquired", async () => {
    expect(offerData.getOffer()).toEqual({
      offers: [
        {
          id: 1,
          title: "Offer 1",
          description: "Offer 1 description",
          category: 1,
          merchants: [
            {
              id: 1,
              name: "Offer1 Merchant1",
              distance: 0.5,
            },
          ],
          valid_to: "2020-02-01",
        },
        {
          id: 3,
          title: "Offer 3",
          description: "Offer 3 description",
          category: 2,
          merchants: [
            {
              id: 3,
              name: "Offer3 Merchant1",
              distance: 0.8,
            },
          ],
          valid_to: "2020-01-01",
        },
      ],
    });
  });
});
test("return nothing when there is no valid offer", async () => {
  const checkinDate = "2022-11-01";
  const offersResponse = await getRes();

  const offerData = new Offer(offersResponse, checkinDate);
  const offer = offerData.getOffer();
  expect(offer).toEqual({ offers: "No valid offer" });
});

test("Another test case to test the function", async () => {
  const checkinDate = "2020-04-25";
  const offersResponse = await getRes();

  const offerData = new Offer(offersResponse, checkinDate);
  const offer = offerData.getOffer();
  expect(offer.offers).toEqual([
    {
      id: 5,
      title: "Offer 5",
      description: "Offer 5 description",
      category: 4,
      merchants: [
        {
          id: 6,
          name: "Offer5 Merchant1",
          distance: 1.2,
        },
      ],
      valid_to: "2020-05-01",
    },
    {
      id: 6,
      title: "Offer 6",
      description: "Offer 6 description",
      category: 2,
      merchants: [
        {
          id: 7,
          name: "Offer6 Merchant1",
          distance: 1.3,
        },
      ],
      valid_to: "2020-05-01",
    },
  ]);
});
