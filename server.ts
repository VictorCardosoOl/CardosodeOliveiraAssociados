import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Security Middleware (OWASP Top 10 Mitigation via CTO/Arch)
  app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    // Removendo identificação do Express para dificultar fingerprinting mitigação CWE-200
    res.removeHeader("X-Powered-By");
    next();
  });

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // TODO: Implement email sending (e.g., using Resend, SendGrid, or Nodemailer)
      // TODO: Implement bot protection (e.g., using reCAPTCHA or Turnstile)
      // Here you would typically send an email or save to a database
      console.log("Received contact form submission:", data);
      
      // Simulate processing time
      setTimeout(() => {
        res.json({ success: true, message: "Form submitted successfully" });
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.issues });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
