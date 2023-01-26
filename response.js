getRes = async () => {
  try {
    return await fetch(
      "https://61c3deadf1af4a0017d990e7.mockapi.io/offers/near_by?lat=1.313492&lon=103.860359&rad=20"
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getRes };
