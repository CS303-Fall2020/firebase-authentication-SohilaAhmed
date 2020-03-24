import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import main from '../screens/main'
import loading from '../screens/loading'


const screens = {
    loading: {
        screen: loading,
        navigationOptions: {
            title: 'loading',
            headerLeft: null,
            headerStyle: {
                backgroundColor:'coral'
            }
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerLeft: null,
            headerStyle: {
                backgroundColor:'coral'
            }
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'SignUp',
            headerLeft: null,
            headerStyle: {
                backgroundColor:'coral'
            }
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            title: 'ForgotPassword',
            headerLeft: null,
            headerStyle: {
                backgroundColor:'coral'
            }
        }
    },
    Main: {
        screen: main,
        navigationOptions: {
            title: 'main',
            headerLeft: null,
            headerStyle: {
                backgroundColor:'coral'
            }
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack); 