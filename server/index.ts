import express from 'express';
import cors from 'cors';
import { readFile, writeFile } from 'fs/promises';
import { parseString, Builder } from 'xml2js';
import { promisify } from 'util';

const app = express();
const parseXML = promisify(parseString);
const xmlBuilder = new Builder();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Add error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// XML file paths
const EVENTS_XML = __dirname + '/data/events.xml';
const PROGRAMS_XML = __dirname + '/data/programs.xml';
const FACULTY_XML = __dirname + '/data/faculty.xml';

interface XMLData {
  events?: { event: any[] };
  programs?: { program: any[] };
  faculty?: { member: any[] };
}

// Helper function to read XML file
async function readXMLFile(filePath: string): Promise<XMLData> {
  try {
    const data = await readFile(filePath, 'utf-8');
    const result = await parseXML(data);
    return result as XMLData;
  } catch (error) {
    console.error(`Error reading XML file: ${filePath}`, error);
    throw error;
  }
}

// Helper function to write XML file
async function writeXMLFile(filePath: string, data: any) {
  try {
    const xml = xmlBuilder.buildObject(data);
    await writeFile(filePath, xml);
  } catch (error) {
    console.error(`Error writing XML file: ${filePath}`, error);
    throw error;
  }
}

// Routes
app.get('/api/events', async (req, res) => {
  try {
    const data = await readXMLFile(EVENTS_XML);
    res.json(data.events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

app.get('/api/programs', async (req, res) => {
  try {
    const data = await readXMLFile(PROGRAMS_XML);
    res.json(data.programs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch programs' });
  }
});

app.get('/api/faculty', async (req, res) => {
  try {
    const data = await readXMLFile(FACULTY_XML);
    res.json(data.faculty);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch faculty' });
  }
});

const PORT = process.env.PORT || 5000;

// Add a health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoints:`);
  console.log(`- http://localhost:${PORT}/api/events`);
  console.log(`- http://localhost:${PORT}/api/programs`);
  console.log(`- http://localhost:${PORT}/api/faculty`);
  console.log(`- http://localhost:${PORT}/api/health`);
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
});

export default app;
