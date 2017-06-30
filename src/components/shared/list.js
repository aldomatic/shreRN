import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import sectionHeader from './sectionHeader';


var {height, width} = Dimensions.get('window');

export default class MyList extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['John Doe', 'Kelly Doe', 'Mark Rojas', 'Robert Johnson', 'Lisa Smith', 'Juan Lopez']),
    };
  }

  _renderRows(rowData){
    return (
      <TouchableHighlight underlayColor="#257181" activeOpacity={0.9} onPress={() => this.props.navTo.navigate('DetailsView',  {id: rowData}) }>
        <View style={{borderBottomColor:'#27344b', borderBottomWidth: 0}}>
          <Text style={styles.listItem}>{rowData}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
         dataSource={this.state.dataSource}
         renderRow={(rowData) => this._renderRows(rowData)}
         style={{width: width}}
       />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    color: '#6e7293',
    textAlign: 'left',
    padding: 10,
    fontSize: 20,
    fontWeight:'normal'
  }
});
