import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {responsiveHeight} from '../Utils/ResponsiveUI';

export default function TextHTML(props) {
  const {text, style, styleSpan, ...restProps} = props;

  const WebDisplay = React.memo(function WebDisplay({html}) {
    const {width: contentWidth} = useWindowDimensions();
    const tagsStyles = {
      a: {
        textDecorationLine: 'none',
      },
      span: styles.textSpan(styleSpan),
    };
    return (
      <RenderHtml
        source={{html: text}}
        contentWidth={contentWidth}
        tagsStyles={tagsStyles}
        baseStyle={styles.textStyle(style)}
        defaultTextProps={{
          allowFontScaling: false,
        }}
        {...restProps}
      />
    );
  });

  return <WebDisplay />;
}

const styles = StyleSheet.create({
  textStyle: style => ({
    // fontFamily: Fonts.type.regular,
    fontSize: responsiveHeight(12),
    fontWeight: '300',
    textAlign: 'left',
    lineHeight: responsiveHeight(14.52),
    ...style,
  }),
  textSpan: styleSpan => ({
    // fontFamily: Fonts.type.semiBold,
    fontWeight: '300',
    ...styleSpan,
  }),
});
