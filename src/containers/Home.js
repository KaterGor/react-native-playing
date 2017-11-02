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
import { List, ListItem } from 'react-native-elements'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getLocations();
    }

    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <ScrollView>
                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            !!this.props.locations && this.props.locations.map((location, id) => (
                                <ListItem
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
    getLocations: Locations.getLocations
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);