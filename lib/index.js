"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useSyncState = function (initValue) {
    var ref = react_1.useRef(null);
    ref.current = initValue;
    function setValue(value) {
        ref.current = value;
    }
    return [ref, setValue];
};
exports.default = useSyncState;
//# sourceMappingURL=index.js.map