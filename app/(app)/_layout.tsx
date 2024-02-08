import { Tabs } from 'expo-router';
import { StatusBar, View, Text } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ChatLogo from 'src/assets/Tabs/ChatLogo.svg';

const AppLayout = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#141414',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView edges={['top', 'bottom']} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            marginBottom: bottom,
            height: 72,
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#141414',
            elevation: 0,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 10,
            paddingBottom: 0,
          },
        }}
        initialRouteName={'chat'}
      >
        <Tabs.Screen
          name={'chat'}
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => {
              return (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                >
                  <ChatLogo
                    fill={focused ? '#28a08c' : '#fff'}
                    width={25}
                    height={25}
                  />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen name={'settings'} />
      </Tabs>
    </View>
  );
};

export default AppLayout;
