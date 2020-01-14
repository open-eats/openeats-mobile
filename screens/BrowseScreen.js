import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Col, Row, Grid } from 'native-base';

import Ratings from '../components/Ratings';

export default class BrowseScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <Content>
          <TouchableOpacity onPress={() => navigate('Recipe', {pk: 1})}>
            <Card  pointerEvents="none" style={{flex: 1}}>
              <Grid>
                <Col>
                  <Image
                    style={{width: 200, height: 200}}
                    source={require('../assets/images/pizza.png')}
                  />
                </Col>
                <Col>
                  <CardItem header style={styles.top}>
                    <Text>Rosemary Garlic White Bean Soup</Text>
                  </CardItem>
                  {/*<CardItem>*/}
                    {/*<Body>*/}
                      {/*<Text>*/}
                        {/*This incredibly easy Soup takes only eight simple ingredients to deliver a bowl full of rich, bold flavor.*/}
                      {/*</Text>*/}
                    {/*</Body>*/}
                  {/*</CardItem>*/}
                  <CardItem style={styles.bottom}>
                    <View>
                      <Left>
                        <Ratings stars={4}/>
                      </Left>
                      <Text note>April 15, 2016</Text>
                    </View>
                  </CardItem>
                </Col>
              </Grid>
            </Card>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

BrowseScreen.navigationOptions = {
  title: 'Browse',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  top: {
    marginBottom: 'auto',
  },
  bottom: {
    flex: 1,
    marginTop: 'auto',
  },
});
