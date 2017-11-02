import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

    render() {
        return (
            <View style={{marginTop: 20}}>
                <View>
                    <TextInput 
                        placeholder="Enter search terms"
                    />
                </View>
                <ScrollView>
                    <Text>Scroll View here</Text>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        routes: state.routes
    }
}

export default connect(mapStateToProps)(Home);