"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = __importDefault(require("./config/config"));
const socket_1 = require("./socket");
socket_1.server.listen(config_1.default.port, () => {
    console.log(`Server running on local:'+ ${config_1.default.port}`);
});
//# sourceMappingURL=index.js.map