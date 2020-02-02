import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Text, CheckBox, List, ListItem } from 'native-base';

const Ingredients = ({ data, check }) => {
  let ingredients = data.map((ingredient, i) => {
    return (
      <ListItem className="ingredient" key={ i }>
        <CheckBox
          // name={ ingredient.child_recipe_id }
          // checked={ ingredient.checked ? ingredient.checked : false }
          // change={ check }
        />
        { (ingredient.quantity !== '0')
            ? <Text className="quantity">{ ingredient.quantity } </Text>
            : null
        }
        { (ingredient.measurement)
            ? <Text className="measurement">{ ingredient.measurement } </Text>
            : null
        }
        { (ingredient.title)
            ? <Text className="title">{ ingredient.title }</Text>
            : null
        }
      </ListItem>
    );
  });

  return (
    <List>
      { ingredients }
    </List>
  );
};

// Ingredients.PropTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     quantity: PropTypes.number.isRequired,
//     measurement: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired).isRequired
// };

export default Ingredients;

