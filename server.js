require("dotenv").config();
const express = require("express");
const cors = require("cors");
const heroRoutes = require("./routes/heroRoutes");
const statsRoutes = require("./routes/statsRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const businessesRoutes = require("./routes/businessesRoutes");
const valuesRoutes = require("./routes/valuesRoutes");
const brandsRoutes = require("./routes/brandsRoutes");
const foundersRoutes = require("./routes/foundersRoutes");
const testimonialsRoutes = require("./routes/testimonialsRoutes");
const contactRoutes = require("./routes/contactRoutes");
const footerRoutes = require("./routes/footerRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const healthRoutes = require("./routes/healthRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/hero", heroRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/businesses", businessesRoutes);
app.use("/api/values", valuesRoutes);
app.use("/api/brands", brandsRoutes);
app.use("/api/founders", foundersRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/health", healthRoutes);

app.listen(PORT, () => {
  console.log(`[King International API] Running on http://localhost:${PORT}`);
});
