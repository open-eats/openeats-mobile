import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Col, Grid, Thumbnail, Body, Icon, Right } from 'native-base';

import Ratings from '../Ratings'

const RecipeHeader = ({ photo, title, rating, addToMenu }) => {
  return (
    <React.Fragment>
      <CardItem>
        <Body>
          <Grid>
            <Col>
              <Text>{ title }</Text>
              <Ratings stars={ rating }/>
            </Col>
            {/*<Col>*/}
              {/*<Icon type='FontAwesome' name='star-o' />*/}
              {/*<button className="btn btn-primary" onClick={addToMenu}>*/}
                {/*<span className="glyphicon glyphicon-calendar" aria-hidden="true"/>*/}
              {/*</button>*/}
            {/*</Col>*/}
          </Grid>
        </Body>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={photo || require('../../assets/images/pizza.png')}
          style={{height: 300, width: null, flex: 1}}
        />
      </CardItem>
    </React.Fragment>
  );
};

// RecipeHeader.PropTypes = {
//   photo: PropTypes.object.isRequired,
//   rating: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
// };

export default RecipeHeader;
