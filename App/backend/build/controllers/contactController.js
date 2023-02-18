"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContactFormService_1 = __importDefault(require("../services/ContactFormService"));
class ContactController {
    constructor(contactService = new ContactFormService_1.default) {
        this.contactService = contactService;
        this.newForm = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const form = req.body;
            const formID = yield this.contactService.newForm(form);
            return res.status(201).json({ message: `your form was registered under id:${formID}` });
        });
    }
}
const contactController = new ContactController();
exports.default = contactController;
