import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4203;

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`VUE FE listening at http://localhost:${PORT}`);
});