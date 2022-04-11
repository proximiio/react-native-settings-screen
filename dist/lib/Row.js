"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
const React = require("react");
const react_native_1 = require("react-native");
const native_1 = require("styled-components/native");
const Chevron_1 = require("./Chevron");
const Row = ({ title, subtitle, onPress, showDisclosureIndicator, renderAccessory, titleStyles, subtitleStyles, isFirst, isLast, }) => {
    let ContentContainer = onPress ? react_native_1.TouchableOpacity : react_native_1.View;
    if (onPress) {
        return (React.createElement(Container, { height: subtitle ? 56 : 46 },
            React.createElement(TopBorderContainer, { isFirst: isFirst },
                React.createElement(TopBorder, null)),
            React.createElement(react_native_1.TouchableOpacity, { style: styles.contentContainer, onPress: onPress },
                React.createElement(TitlesContainer, null,
                    React.createElement(react_native_1.View, null),
                    React.createElement(Title, { numberOfLines: 1, style: titleStyles }, title),
                    subtitle && (React.createElement(Subtitle, { numberOfLines: 1, style: subtitleStyles }, subtitle)),
                    React.createElement(react_native_1.View, null)),
                renderAccessory && renderAccessory(),
                showDisclosureIndicator ? React.createElement(Chevron_1.Chevron, null) : React.createElement(react_native_1.View, { style: { width: 10 } })),
            isLast && React.createElement(BottomBorder, null)));
    }
    return (React.createElement(Container, { height: subtitle ? 56 : 46 },
        React.createElement(TopBorderContainer, { isFirst: isFirst },
            React.createElement(TopBorder, null)),
        React.createElement(react_native_1.View, { style: styles.contentContainer },
            React.createElement(TitlesContainer, null,
                React.createElement(react_native_1.View, null),
                React.createElement(Title, { numberOfLines: 1, style: titleStyles }, title),
                subtitle && (React.createElement(Subtitle, { numberOfLines: 1, style: subtitleStyles }, subtitle)),
                React.createElement(react_native_1.View, null)),
            renderAccessory && renderAccessory(),
            showDisclosureIndicator ? React.createElement(Chevron_1.Chevron, null) : React.createElement(react_native_1.View, { style: { width: 10 } })),
        isLast && React.createElement(BottomBorder, null)));
};
exports.Row = Row;
const styles = react_native_1.StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        paddingLeft: 15,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
const Container = native_1.default.View `
  background-color: transparent;
  height: ${(p) => p.height};
  align-items: stretch;
`;
const TopBorderContainer = native_1.default.View `
  align-self: stretch;
  height: ${react_native_1.StyleSheet.hairlineWidth};
  padding-left: ${(p) => (p.isFirst ? 0 : 15)};
  background-color: white;
`;
const TopBorder = native_1.default.View `
  flex: 1;
  background-color: #ccc;
`;
const TitlesContainer = native_1.default.View `
  flex: 1;
  justify-content: space-around;
  align-self: stretch;
`;
const Title = native_1.default.Text `
  color: black;
  font-size: 18;
  margin-right: 15;
`;
const Subtitle = native_1.default.Text `
  color: #999;
  font-size: 15;
  margin-right: 15;
`;
const BottomBorder = native_1.default.View `
  align-self: stretch;
  height: ${react_native_1.StyleSheet.hairlineWidth};
  background-color: #ccc;
`;
