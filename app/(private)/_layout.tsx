import { Tabs } from 'expo-router';
import { StatusBar, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatLogo from 'src/assets/Tabs/ChatLogo.svg';

const AppLayout = () => {
  return (
    <View style={styles.content}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeAreaView}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
          }}
          initialRouteName={'chat'}
        >
          <Tabs.Screen
            name={'chat'}
            options={{
              tabBarIcon: ({ focused }: { focused: boolean }) => {
                return (
                  <View style={styles.tabBarIConContainer}>
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
      </SafeAreaView>
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#141414',
    paddingHorizontal: 16,
  },
  tabBarStyle: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
    elevation: 0,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingBottom: 0,
  },
  safeAreaView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabBarIConContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
