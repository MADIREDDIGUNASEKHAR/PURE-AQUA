module.exports = function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Pure Aqua 500ml",
      type: "Packaged Drinking Water",
      price: 10,
      image: "500ml",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Pure Aqua 1 Litre",
      type: "Packaged Drinking Water",
      price: 20,
      image: "1L",
      badge: "Popular",
    },
    {
      id: 3,
      name: "Empty Bottle 250ml",
      type: "Empty Water Bottle",
      price: 5,
      image: "250ml",
      badge: null,
    },
    {
      id: 4,
      name: "Empty Bottle 500ml",
      type: "Empty Water Bottle",
      price: 8,
      image: "500ml-empty",
      badge: null,
    },
    {
      id: 5,
      name: "Empty Bottle 1 Litre",
      type: "Empty Water Bottle",
      price: 12,
      image: "1L-empty",
      badge: null,
    },
  ]);
};
