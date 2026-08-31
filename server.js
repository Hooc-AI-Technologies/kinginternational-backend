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

const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── CORS ────────────────────────────────────────────────────────────────────
// In development ALLOWED_ORIGINS is not set, so we allow any origin.
// In production set ALLOWED_ORIGINS as a comma-separated list of allowed URLs,
// e.g. ALLOWED_ORIGINS=https://kinginternational.com,https://admin.kinginternational.com
const rawOrigins = process.env.ALLOWED_ORIGINS;
const allowedOrigins = rawOrigins
  ? rawOrigins.split(",").map((o) => o.trim())
  : null; // null → open (dev mode)

const corsOptions = {
  origin: allowedOrigins
    ? (origin, callback) => {
        // Allow requests with no origin header (mobile apps, curl, SSR, health checks)
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error(`CORS: origin '${origin}' not allowed`));
        }
      }
    : "*", // Dev: allow all
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
// Respond to all preflight requests
app.options("*", cors(corsOptions));
// ─────────────────────────────────────────────────────────────────────────────
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "public", "uploads")));

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
