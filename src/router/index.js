import React from 'react';
import {NavigationContainer, useLinking} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../pages';
import {getToken} from '../utils/helper';
import {AuthContext} from '../configs/context';

import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';

const Stack = createStackNavigator();

const Router = ({userToken}) => {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      /> */}
      {userToken ? (
        <Stack.Screen
          name="App"
          component={AppStackNavigator}
          options={{animationEnabled: false}}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{animationEnabled: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default () => {
  const ref = React.useRef();
  
  const {getInitialState} = useLinking(ref, {
    prefixes: ['http://ggwp.id', 'ggwp://'],
    config: {},
  });

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: token => {
        setIsLoading(false);
        setUserToken(token);
      },
      signUp: token => {
        setIsLoading(false);
        setUserToken(token);
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    
    // deep links
    Promise.race([
      getInitialState(),
      new Promise(resolve =>
        // Timeout in 150ms if `getInitialState` doesn't resolve
        // Workaround for https://github.com/facebook/react-native/issues/25675
        setTimeout(resolve, 150),
      ),
    ])
      .catch(e => {
        if (__DEV__) {
          console.error(e);
        }
      })
      .then(state => {
        if (state !== undefined) {
          setInitialState(state);
        }

        setIsReady(true);
      });

    // bootstrap
    getToken()
      .then(token => setUserToken(token))
      .catch(error => {
        // console.log(error);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      
    };
  }, [getInitialState]);

  if (isLoading) {
    return <Splash />;
  }

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer
        initialState={initialState}
        ref={ref}
        >
        <Router userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
