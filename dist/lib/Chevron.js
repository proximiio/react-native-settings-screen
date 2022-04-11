"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chevron = void 0;
const React = require("react");
const react_native_1 = require("react-native");
const Chevron = ({ style }) => (React.createElement(react_native_1.Image, { style: [defaultStyles.chevron, style], source: require('../../chevron3.png') }));
exports.Chevron = Chevron;
const defaultStyles = react_native_1.StyleSheet.create({
    chevron: {
        width: 12,
        height: 12,
        marginLeft: 8,
        marginRight: 10,
        opacity: 0.35,
    },
});
