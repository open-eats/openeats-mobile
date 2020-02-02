import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Container, Content, Card, Text, Separator, Icon } from 'native-base';

import IngredientGroups from './IngredientGroups'
import SubRecipes from './SubRecipes'
import Directions from './Directions'
import RecipeHeader from './RecipeHeader'
// import RecipeFooter from './RecipeFooter'
// import IngredientButtons from './IngredientButtons'
// import InfoPanel from './InfoPanel'

class RecipeScheme extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <RecipeHeader
              photo={ this.props.photo }
              rating={ this.props.rating }
              title={ this.props.title }
              // addToMenu={ this.props.addToMenu }
            />
              {/*<InfoPanel*/}
                {/*cookTime={ this.props.cook_time }*/}
                {/*prepTime={ this.props.prep_time }*/}
                {/*servings={ this.props.servings }*/}
                {/*customServings={ this.props.customServings }*/}
                {/*info={ this.props.info }*/}
                {/*updateServings={ this.props.recipeActions.updateServings }*/}
                {/*clearServings={ this.props.recipeActions.resetServings }*/}
              {/*/>*/}
              <Separator bordered><Text>Ingredients</Text></Separator>
              <SubRecipes
                data={[{
                  child_recipe_id: 1,
                  slug: 'test',
                  quantity: 1,
                  measurement: 'cup',
                  title: 'test recipe',
                }]}
                // check={ this.props.recipeActions.checkSubRecipe }
              />
              <IngredientGroups
                data={ this.props.ingredient_groups }
                // check={ this.props.recipeActions.checkIngredient }
              />
              {/*<IngredientButtons*/}
                {/*listStatus={ this.props.listStatus }*/}
                {/*lists={ this.props.lists }*/}
                {/*bulkAdd={ this.props.recipeItemActions.bulkAdd.bind(this, this.props) }*/}
                {/*checkAll={ this.props.recipeActions.checkAll }*/}
                {/*unCheckAll={ this.props.recipeActions.unCheckAll }*/}
              {/*/>*/}
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
            <Separator bordered><Text>Directions</Text></Separator>
            <Directions data={ this.props.directions }/>
          </Card>
          {/*<RecipeFooter*/}
            {/*slug={ this.props.slug }*/}
            {/*source={ this.props.source }*/}
            {/*username={ this.props.username }*/}
            {/*updateDate={ this.props.update_date }*/}
            {/*deleteRecipe={ this.props.recipeActions.deleteRecipe }*/}
            {/*showEditLink={ this.props.showEditLink }*/}
          {/*/>*/}
        </Content>
      </Container>
    );
  }
}

export default RecipeScheme;
