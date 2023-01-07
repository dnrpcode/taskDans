import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TextHTML from '../Components/TextHTML';
import {
  responsiveHeight,
  responsiveWidth,
  windowWidth,
} from '../Utils/ResponsiveUI';

export default function JobDetail(props) {
  const data = props.route.params.data;
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Company</Text>
          <View style={styles.card}>
            <Image source={{uri: data.company_logo}} style={styles.logo} />
            <View style={styles.conText}>
              <Text style={styles.titleJob}>{data.title}</Text>
              <Text style={styles.descJob}>{data.company}</Text>
              <TouchableOpacity
                onPress={async () => await Linking.openURL(data.company_url)}>
                <Text style={styles.link}>Go To Website</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[styles.value, {marginBottom: responsiveHeight(20)}]}>
            Job Specification
          </Text>
          <View
            style={[
              styles.card,
              {flexDirection: 'column', alignItems: 'flex-start'},
            ]}>
            <Text style={styles.subTitle}>Title</Text>
            <Text style={styles.value}>{data.title}</Text>
            <Text style={styles.subTitle}>Fulltime</Text>
            <Text style={styles.value}>{data.type ? 'Yes' : 'NoF'}</Text>
            <Text style={styles.subTitle}>Description</Text>
            <TextHTML text={data.description} style={{width: '90%'}} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(80),
  },
  content: {
    paddingHorizontal: responsiveWidth(20),
  },
  title: {
    fontSize: 20,
    marginVertical: responsiveHeight(40),
    alignSelf: 'flex-start',
    color: 'black',
    fontWeight: '700',
  },
  card: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    padding: responsiveWidth(20),
    marginBottom: responsiveHeight(15),
  },
  titleJob: {
    fontSize: 12,
    fontWeight: '700',
  },
  descJob: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: responsiveHeight(5),
  },
  link: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: responsiveHeight(5),
    color: 'blue',
  },
  logo: {
    height: responsiveHeight(50),
    width: responsiveHeight(50),
  },
  conText: {
    width: windowWidth * 0.5,
  },
  subTitle: {
    fontSize: 14,
    marginTop: responsiveHeight(20),
    color: '#666666',
    fontWeight: '700',
  },
  value: {
    fontSize: 14,
    marginTop: responsiveHeight(5),
    fontWeight: '700',
  },
});
