import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Locations from '../actions/locations';
import {
    ScrollView,
    View,
    TextInput,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from "react-native-router-flux";

class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <View>
                    <Text>
                        Start station: {this.props.startStation.name}
                    </Text>
                </View>
                <ScrollView>
                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            !!this.props.transportResults && this.props.transportResults.map((result, id) => {
                                return result.products.map((product, id) => {
                                    return <ListItem
                                        leftIcon={{ name: 'confirmation-number' }}
                                        key={id}
                                        title={product.name}
                                    />
                                });

                            })
                        }
                    </List>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        transportResults: state.transportResults,
        startStation: state.startStation,
        startStation: state.endStation
    }
}

export default connect(mapStateToProps)(Result);