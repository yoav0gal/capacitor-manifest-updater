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
var fs_1 = require("fs");
var process = __importStar(require("process"));
var args = process.argv.slice(2);
var manifestPath = args[0];
var permissions = args.slice(1);
try {
    var manifestContent_1 = (0, fs_1.readFileSync)(manifestPath, "utf-8");
    permissions.forEach(function (permission) {
        if (!manifestContent_1.includes(permission)) {
            manifestContent_1 = manifestContent_1.replace("<manifest", "<uses-permission android:name=\"".concat(permission, "\" />\n<manifest"));
        }
    });
    (0, fs_1.writeFileSync)(manifestPath, manifestContent_1);
    console.log("AndroidManifest.xml updated successfully");
}
catch (error) {
    console.error("Failed to update AndroidManifest.xml:", error);
}
