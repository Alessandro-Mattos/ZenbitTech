"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const validate_1 = __importDefault(require("./middlewares/validate"));
const contactController_1 = __importDefault(require("./controllers/contactController"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const route = (0, express_1.Router)();
const PORT = process.env.APP_PORT || 4000;
const HOSTNAME = process.env.APP_HOSTNAME || 'http://localhost';
app.use(express_1.default.json());
// -----------------------------Endpoints----------------------------------
// ---------------ROOT
route.get('/', (req, res) => {
    res.json({ message: 'its alive!' });
});
// --------------POST
// Contact
route.post('/contact', validate_1.default.contactForm, contactController_1.default.newForm);
app.use(route);
app.listen(PORT, () => {
    console.log(`server running on port ${HOSTNAME}:${PORT}`);
});
