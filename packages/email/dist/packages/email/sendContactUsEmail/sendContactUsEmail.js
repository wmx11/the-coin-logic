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
const config_1 = __importDefault(require("../config"));
const emailClient_1 = __importDefault(require("../emailClient"));
const sendContactUsEmail = ({ from, name, message }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield emailClient_1.default.send({
            to: config_1.default.tclEmail,
            from: { email: config_1.default.tclEmail, name: 'TCL Contact Form' },
            replyTo: from,
            subject: `${name} - I'd like to contact`,
            text: message,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = sendContactUsEmail;
