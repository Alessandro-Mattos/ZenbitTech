import express, {Router, Request, Response} from 'express';
import validate from './middlewares/validate';
import contactController from './controllers/contactController';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const route = Router();
const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.APP_HOSTNAME || 'http://localhost';
app.use(cors());
app.use(express.json());

// -----------------------------Endpoints----------------------------------
// ---------------ROOT
route.get('/', (req : Request, res : Response) => {
    res.json({message: 'its alive!'});
});
// --------------POST
// Contact
route.post('/contact', validate.contactForm, contactController.newForm)

app.use(route);
app.listen(PORT, () => {
    console.log(`server running on port ${HOSTNAME}:${PORT}`);
});
