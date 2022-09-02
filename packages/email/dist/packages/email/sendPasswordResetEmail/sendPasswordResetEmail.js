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
const message = {
    from: config_1.default.tclEmail,
    subject: 'TCL - Password Reset Request',
};
const sendPasswordResetEmail = (to, resetLink) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield emailClient_1.default.send(Object.assign(Object.assign({ to }, message), { html: `
      <div>
      <p>Looks like you have requested a password reset.</p>
      <p>To reset your password, click on the button below.</p>
      <a href="${resetLink}" target="_blank" style="text-decoration: none; cursor: pointer;">
        <button
          style="
            padding: 10px;
            background: #7950f2;
            max-width: 200px;
            text-align: center;
            color: white;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            outline: none;
            border: none;
            cursor: pointer;
          "
        >
          Reset password
        </button>
      </a>
      <p>The link is only valid for 10 minutes.</p>
      <p>If you are experiencing any issues, please contact us.</p>
      <p>
        If you have not requested a password reset, please ignore this message.
      </p>
    </div>` }));
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = sendPasswordResetEmail;
