import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, View } from 'native-base';

class Ratings extends Component {
  render() {
    let stars = this.props.stars;

    if (stars > 5) {
      stars = 5;
    } else if (stars < 0) {
      stars = 0;
    }

    const full_stars = [...Array(stars).keys()].map(function(name, index) {
      return <Icon style={ styles.star } key={ index } type='FontAwesome' name='star' />;
    });
    const empty_stars = [...Array(5 - stars).keys()].map(function(name, index) {
      return <Icon style={ styles.star } key={ index } type='FontAwesome' name='star-o' />
    });

    return (
      <View style={styles.wrapper}>
        { full_stars }
        { empty_stars }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection:'row',
    flexWrap:'wrap',
  },
  star: {
    color: '#7e6',
    fontSize: 18
    // marginBottom: -300
    // paddingTop: 15,
    // backgroundColor: '#fff',
  },
});

export default Ratings;
