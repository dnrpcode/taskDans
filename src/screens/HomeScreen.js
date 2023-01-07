import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  windowWidth,
} from '../Utils/ResponsiveUI';
import SearchBar from '../Components/SearchBar';
import Loader from '../Components/Loader';

export default function HomeScreen({navigation}) {
  const [job, setJob] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);

  const getPosistion = async (param = '', isFilter = false) => {
    setLoading(true);
    const uri =
      'http://dev3.dansmultipro.co.id/api/recruitment/positions.json?' +
      param +
      '&page=' +
      page;

    let response = await fetch(uri);
    setLoading(false);

    let json = await response.json();
    console.log('log data', uri, json);

    if (isFilter) {
      setFilter(true);
      if (json.length > 0) {
        setJob(json);
      } else {
        setJob([]);
      }
      return;
    }

    if (json.length > 0) {
      setJob(job.concat(json));
    }
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  useEffect(() => {
    getPosistion();
  }, []);

  function getPositionByPage() {
    getPosistion();
    setPage(page + 1);
  }

  function onFilter(pr) {
    setPage(1);
    console.log(pr, 'ini param');
    setFilter(pr);
    getPosistion(pr, true);
  }

  return (
    <View style={styles.page}>
      <Loader visibility={loading} />
      <SearchBar _onFilter={onFilter} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={500}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            getPositionByPage();
          }
        }}>
        <View style={styles.content}>
          <Text style={styles.title}>List Schedule</Text>
          {job &&
            job?.map(
              (x, i) =>
                x && (
                  <TouchableOpacity
                    style={styles.conSchdl}
                    key={i}
                    onPress={() => navigation.navigate('JobDetail', {data: x})}>
                    <Image source={{uri: x.company_logo}} style={styles.logo} />
                    <View style={styles.conText}>
                      <Text style={styles.titleJob}>{x.title}</Text>
                      <Text style={styles.descJob}>{x.company}</Text>
                      <Text style={styles.descJob}>{x.location}</Text>
                    </View>
                    <Text style={styles.titleJob}>{'>'}</Text>
                  </TouchableOpacity>
                ),
            )}
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
  conSchdl: {
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
    marginTop: responsiveHeight(5),
  },
  logo: {
    height: responsiveHeight(50),
    width: responsiveHeight(50),
  },
  conText: {
    width: windowWidth * 0.5,
  },
});
