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


class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getLocations();
    }

    setStartStation(location) {
        this.props.setStartStation(location);
        Actions.endStation();
    }

    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <ScrollView>
                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            !!this.props.locations && this.props.locations.map((location, id) => (
                                <ListItem
                                    leftIcon={{name: 'directions'}}
                                    onPress={() => this.setStartStation(location)}
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
        locations: state.locations
    }
}

const mapDispatchToProps = {
    getLocations: Locations.getLocations,
    setStartStation: Locations.setStartStation
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);