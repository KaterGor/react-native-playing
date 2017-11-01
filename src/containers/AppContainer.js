import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
// import { ActionCreators } from '../actions';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "yay!"}
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    I am AppContainer!
                    {this.state.text}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    // login: UserActions.login,
    // getRecipes: RecipeActions.getRecipes,
    // getMeals: RecipeActions.getMeals,
  };

export default connect(mapStateToProps)(AppContainer);

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