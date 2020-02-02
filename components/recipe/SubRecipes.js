import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Text, CheckBox, List, ListItem } from 'native-base';

const SubRecipes = ({ data, check }) => {
  let subRecipes = data.map((subRecipe, i) => {
    return (
      <ListItem className="ingredient" key={ i }>
        <CheckBox
          // name={ subRecipe.child_recipe_id }
          // checked={ subRecipe.checked ? subRecipe.checked : false }
          // change={ check }
        />
        { (subRecipe.quantity !== '0')
            ? <Text className="quantity">{ subRecipe.quantity } </Text>
            : null
        }
        { (subRecipe.measurement)
            ? <Text className="measurement">{ subRecipe.measurement } </Text>
            : null
        }
        { (subRecipe.title)
            ? <Text to={ "/recipe/" + subRecipe.slug } className="title">{ subRecipe.title }</Text>
            : null
        }
      </ListItem>
    );
  });

  return (
    <List>
      { subRecipes }
    </List>
  );
};
//
// SubRecipes.PropTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     child_recipe_id: PropTypes.number.isRequired,
//     slug: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//     measurement: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired).isRequired
// };

export default SubRecipes;
