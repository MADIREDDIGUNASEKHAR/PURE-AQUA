module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, phone, message } = req.body || {};

  console.log("New enquiry:", { name, phone, message });

  return res.status(200).json({
    success: true,
    message: "Enquiry received! We'll contact you soon.",
  });
};
