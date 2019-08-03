"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requests_1 = __importDefault(require("./routes/requests"));
const app = express_1.default();
const port = 3000;
app.use('/requests', requests_1.default);
app.listen(port, () => {
    console.log('Listening on port:', port);
});
//# sourceMappingURL=index.js.map