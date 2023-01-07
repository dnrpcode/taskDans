//!For edit this file please confirm dani
import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

//tinggi dan lebar device pada desain figma
let widthFigma = 414;
let heightFigma = 896;

//dimensions device
export const HIpSe1 = 568; // height iPhone SE (1st generation)
export const WIpSe1 = 320; // width iPhone SE (1st generation)

export const responsiveWidth = width => {
  return (windowWidth * width) / widthFigma;
};

export const responsiveHeight = height => {
  return (windowHeight * height) / heightFigma;
};
