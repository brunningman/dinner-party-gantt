"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.end();
});
exports.start = (port) => {
    return new Promise((resolve, reject) => {
        app.listen(port, resolve);
    });
};
//# sourceMappingURL=app.js.map