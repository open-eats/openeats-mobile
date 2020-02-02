import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Text, CheckBox, List, ListItem, Separator } from 'native-base';

const Directions = ({ data }) => {
  let directions = [];
  let directionsGroups = [];
  // eslint-disable-next-line
  data.split("\n").map((direction, i) => {
    if (direction.length > 0) {
      if (direction.endsWith(":")) {
        directionsGroups.push(
          <React.Fragment key={i}>
            {directions}
            <ListItem itemHeader first>
              <Text>{direction.substring(0, direction.length - 1)}</Text>
            </ListItem>
          </React.Fragment>
        );
        directions = [];
      } else {
        directions.push(
          <ListItem className="direction" key={i}>
            <Text>{direction}</Text>
          </ListItem>
        );
      }
    }
  });

  directionsGroups.push(
    <List className="directions" key='last'>
      {directions}
    </List>
  );

  return (
    <View>
      { directionsGroups }
    </View>
  );
};

// Directions.PropTypes = {
//   data: PropTypes.string.isRequired
// };

export default Directions;
