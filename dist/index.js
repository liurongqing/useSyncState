"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useSyncState = function (initValue) {
    var _a = react_1.useState(initValue), a = _a[0], b = _a[1];
    //   const ref = useRef(null)
    //   ref.current = initValue
    //   const setValue: any = []
    //   //   function setValue(value: any) {
    //   //     ref.current = value
    //   //   }
    //   return [ref, setValue]
    return [a, b];
};
exports.default = useSyncState;
//# sourceMappingURL=index.js.map