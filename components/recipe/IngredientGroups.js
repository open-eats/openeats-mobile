import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, CheckBox, List, ListItem, View, Separator } from 'native-base';

import Ingredients from './Ingredients'

const IngredientGroups = ({ data, check }) => {
  let ingredientGroups = data.map((group, i) => (
    <View className="ingredient-group" key={ i }>
      { group.title ? <ListItem itemHeader first><Text>{ group.title }</Text></ListItem> : null }
      <Ingredients data={ group.ingredients } check={ check }/>
    </View>
  ));

  return (
    <View className="ingredient-groups">
      { ingredientGroups }
    </View>
  );
};

// IngredientGroups.PropTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     ingredients: PropTypes.object.isRequired,
//   }).isRequired).isRequired
// };

export default IngredientGroups;
