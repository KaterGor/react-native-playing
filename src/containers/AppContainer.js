import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }
    changeText() {
        this.props.addText('It works!!');
    }
    render() {
        let text = this.props.text;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    I am AppContainer!
                    {text}
                </Text>
                <TouchableHighlight onPress={() => { this.changeText() }}>
                    <Text>Press here</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ text: state.text });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});