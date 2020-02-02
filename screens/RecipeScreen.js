import React from 'react'
import { Container, Content } from 'native-base';

import RecipeSchema from '../components/recipe/RecipeScheme'
import data from './data'
// import Recipe from '../containers/Recipe'
// import Rating from '../../rating/containers/Rating'
// import MiniBrowse from '../../browse/containers/MiniBrowse'

const RecipeView = ({ match }) => (
  <Container>
    <Content>
      <RecipeSchema
        // rating={ 4 }
        // title={ 'Rosemary Garlic White Bean Soup' }
        { ...data }
      />
      {/*<Recipe match={ match } />*/}
      {/*<Rating match={ match } />*/}
      {/*<div className="col-md-3">*/}
        {/*<MiniBrowse format="col-md-12 col-sm-6 col-xs-12" qs="?limit=4" />*/}
      {/*</div>*/}
    </Content>
  </Container>
);

RecipeView.navigationOptions = {
  title: data.title,
};

export default RecipeView;
