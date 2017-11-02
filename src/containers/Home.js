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

class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // this.props.loadArticles();
    }

    loadLocations() {
        this.props.getLocations();
    }

    render() {
        return (
            <View style={{marginTop: 20}}>
                <TouchableHighlight onPress={this.loadLocations()}>
                    <Text>Load locations</Text>
                </TouchableHighlight>
                <ScrollView>
                    <Text>Scroll View here</Text>
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