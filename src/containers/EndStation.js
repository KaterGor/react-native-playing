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
import {Actions} from "react-native-router-flux";

class EndStation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getLocations();
    }

    setEndStation(endStation) {
        let startStation = this.props.startStation;
        console.log(startStation, endStation);
        this.props.getTransportationResults(startStation, endStation);
        Actions.result();
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
                            !!this.props.locations && this.props.locations.map((location, id) => (
                                <ListItem
                                    leftIcon={{name: 'directions'}}
                                    onPress={() => this.setEndStation(location)}
                                    key={id}
                                    title={location.name}
                                />
                            ))
                        }
                    </List>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        locations: state.locations,
        startStation: state.startStation
    }
}

const mapDispatchToProps = {
    getLocations: Locations.getLocations,
    setEndStation: Locations.setEndStation,
    getTransportationResults: Locations.getTransportationResults
}

export default connect(mapStateToProps, mapDispatchToProps)(EndStation);