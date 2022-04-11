"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const React = require("react");
const native_1 = require("styled-components/native");
const Row_1 = require("./Row");
const Section = ({ section, globalTextStyle }) => {
    let elements = [];
    if (section.header) {
        elements.push(React.createElement(SectionHeader, { key: section.header, style: [globalTextStyle] }, section.header));
    }
    for (let i = 0; i < section.rows.length; i++) {
        const rowData = section.rows[i];
        const isFirst = i === 0;
        const isLast = i === section.rows.length - 1;
        elements.push(React.createElement(Row_1.Row, Object.assign({ key: rowData.title }, rowData, { titleStyles: [globalTextStyle, rowData.titleStyle], subtitleStyles: [globalTextStyle, rowData.subtitleStyle], isFirst: isFirst, isLast: isLast })));
    }
    if (typeof section.footer === 'string') {
        elements.push(React.createElement(SectionFooter, { key: section.footer, style: globalTextStyle }, section.footer));
    }
    else if (typeof section.footer === 'function') {
        if (!section.key) {
            throw new Error(`Sections with a render function passed as footer must have their key property set. (Offending section has header ${section.header})`);
        }
        elements.push(React.createElement(RenderedSectionFooterContainer, { key: section.key + '-footer' }, section.footer()));
    }
    return React.createElement(SectionContainer, null, elements);
};
exports.Section = Section;
const SectionContainer = native_1.default.View `
  align-items: stretch;
  margin-bottom: 40;
`;
const SectionHeader = native_1.default.Text `
  margin-left: 20;
  margin-bottom: 8;
  color: #999;
  font-size: 14;
`;
const SectionFooter = native_1.default.Text `
  margin-top: 8;
  font-size: 15;
  color: #999;
  margin-horizontal: 15;
`;
const RenderedSectionFooterContainer = native_1.default.View `
  align-self: stretch;
`;
