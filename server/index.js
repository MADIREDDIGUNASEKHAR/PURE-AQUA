const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Products data
app.get("/api/products", (req, res) => {
  res.json([
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
});

// Enquiry submission
app.post("/api/enquiry", (req, res) => {
  const { name, phone, message } = req.body;
  console.log("New enquiry:", { name, phone, message });
  res.json({ success: true, message: "Enquiry received! We'll contact you soon." });
});

// Stats
app.get("/api/stats", (req, res) => {
  res.json([
    { label: "Litres Purified", value: "10,000+", icon: "droplet" },
    { label: "Happy Families", value: "500+", icon: "users" },
    { label: "Years of Purity", value: "1", icon: "star" },
    { label: "Home Deliveries", value: "200+", icon: "truck" },
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Pure Aqua server running on port ${PORT}`));
