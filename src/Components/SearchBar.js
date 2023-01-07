import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  windowWidth,
} from '../Utils/ResponsiveUI';

const SearchBar = ({_onFilter}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [isFulltime, setIsFulltime] = useState(false);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  function _applyFilter() {
    const description = search ? 'description=' + search : '';
    const loc = location ? '&location=' + location.toLowerCase() : '';
    const full_time = isFulltime ? '&full_time=true' : '';
    const res = description + loc + full_time;
    _onFilter(res);
  }
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          placeholder="Search"
        />
        <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
          <Text style={styles.arrow}>{showFilter ? '^' : '>'}</Text>
        </TouchableOpacity>
      </View>
      {showFilter && (
        <View style={styles.filter}>
          <View style={styles.conFilter}>
            <Text>Fulltime</Text>
            <Switch onValueChange={setIsFulltime} value={isFulltime} />
          </View>
          <View style={styles.conFilter}>
            <Text>Location</Text>
            <TextInput
              style={styles.input}
              onChangeText={setLocation}
              value={location}
              placeholder="Location"
            />
          </View>
          <Button title="Apply Filter" onPress={_applyFilter} />
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    height: responsiveHeight(40),
    margin: 12,
    marginRight: 0,
    borderWidth: 1,
    padding: 10,
    borderRadius: responsiveWidth(20),
    width: windowWidth * 0.8,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    fontSize: responsiveHeight(45),
  },
  filter: {
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 15,
    padding: 15,
  },
  conFilter: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
