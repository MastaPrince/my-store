exports.handler = async function () {

  const products = [
    {
      id: 1,
      name: "Netflix Premium",
      price: 299
    },
    {
      id: 2,
      name: "Spotify Premium",
      price: 149
    }
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(products)
  };

};