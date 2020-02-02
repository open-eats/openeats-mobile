import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Col, Grid, Row, Header } from 'native-base';
import { Input } from '../../common/components/FormComponents'

const RecipeHeader = ({ cookTime, prepTime, servings, customServings, info, updateServings, clearServings }) => {

  let clearInput = '';
  if (servings !== customServings) {
    clearInput = (
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={ clearServings.bind(this, servings) }>
          <span className="glyphicon glyphicon-remove" aria-hidden="true"/>
        </button>
      </span>
    )
  }

  return (
    <div className="panel panel-default">
      <table className="table table-bordered">
        <thead>
          <tr className="active">
            <th>{ intl.formatMessage(messages.servings) }</th>
            <th>{ intl.formatMessage(messages.prep_time) }</th>
            <th>{ intl.formatMessage(messages.cooking_time) }</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="input-group print-hidden">
                <Input
                  name="servings"
                  type="number"
                  size="servings-textbox"
                  change={ updateServings }
                  value={ customServings!==0 ? customServings : '' } />
                { clearInput }
              </div>
              <p className="print-only">{ customServings ? customServings : servings }</p>
            </td>
            <td>{ prepTime } { intl.formatMessage(messages.minutes) }</td>
            <td>{ cookTime } { intl.formatMessage(messages.minutes) }</td>
          </tr>
        </tbody>
      </table>
      <div className="panel-body">
        <p>{ info }</p>
      </div>
    </div>
  );
};

// RecipeHeader.PropTypes = {
//   cookTime: PropTypes.number.isRequired,
//   prepTime: PropTypes.number.isRequired,
//   servings: PropTypes.number.isRequired,
//   customServings: PropTypes.string,
//   info: PropTypes.string.isRequired,
//   updateServings: PropTypes.func.isRequired,
//   clearServings: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

export default injectIntl(RecipeHeader);
