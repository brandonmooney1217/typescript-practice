"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = __importStar(require("./function"));
/**
* Lecture 1-3 Practice
*/
console.log((0, function_1.default)(2, 3));
console.log((0, function_1.combineString)("test", "test"));
(0, function_1.printFormat)("hey", 9);
console.log((0, function_1.fetchData)("url.com"));
const name = {
    first: "Joe",
    last: "Smith"
};
console.log((0, function_1.createName)(name));
console.log((0, function_1.helper)([1, 2, 3], (v) => v + 100));
/**
  * Lecture 4 Practice
*/ 
