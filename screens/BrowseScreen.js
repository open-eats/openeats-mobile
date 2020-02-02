import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Col, Grid } from 'native-base';

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
                  <CardItem style={styles.top}>
                    <Text style={styles.header}>Rosemary Garlic White Bean Soup</Text>
                  </CardItem>
                  <CardItem>
                    <Text style={styles.description}>
                      This incredibly easy Soup delivers a bowl full of rich, bold flavor.
                    </Text>
                  </CardItem>
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
  top: {
    marginBottom: 'auto',
  },
  header: {
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14
  },
  bottom: {
    flex: 1,
    marginTop: 'auto',
  },
});
