"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const find_yarn_workspace_root_1 = __importDefault(require("find-yarn-workspace-root"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
dotenv_1.default.config({ path: `${(0, find_yarn_workspace_root_1.default)()}/.env` });
const apiKey = process.env.SENDGRID_API || '';
mail_1.default.setApiKey(apiKey);
exports.default = mail_1.default;
