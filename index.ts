import dotenv from 'dotenv';
import Server from './src/server';

// --> Setting environment variables <--
dotenv.config();

// --> Server initialization <--
const server = new Server();
server.listen();
