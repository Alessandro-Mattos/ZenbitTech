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
Object.defineProperty(exports, "__esModule", { value: true });
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
class Validate {
    constructor() {
        this.contactForm = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, message } = req.body;
            if (!name) {
                res.status(400).send({ message: 'The "name" field is required' });
            }
            if (!email.match(regex)) {
                res.status(400).send({ message: ' The "email" field must be in this format: "email@email.com"' });
            }
            if (!message) {
                res.status(400).send({ message: 'The field "name" is required' });
            }
            if (message.length < 20) {
                res.status(400).send({ message: 'the field  "message" must to be at least 20 characters' });
            }
            next();
        });
    }
}
;
const validate = new Validate();
exports.default = validate;
