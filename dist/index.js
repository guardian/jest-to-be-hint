"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeHint = (received, actual, hint) => {
    if (received === actual) {
        return {
            pass: true,
            message: () => ""
        };
    }
    return {
        pass: false,
        message: () => hint
    };
};
//# sourceMappingURL=index.js.map