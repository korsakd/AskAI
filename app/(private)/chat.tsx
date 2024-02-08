import React, { useState } from 'react';
import { View, StyleSheet, TextInput, FlatList, Pressable } from 'react-native';
import SendLogo from 'src/assets/Chat/Send.svg';
import AssistantChatItem from 'src/components/Chat/AssistantChatItem';
import UserChatItem from 'src/components/Chat/UserChatItem';

const Home = () => {
  const [message, setMessage] = useState('');
  const data = [
    {
      role: 'assistant',
      message: 'Hello there, how may I assist you today?',
    },
    {
      role: 'user',
      message: 'Hello?',
    },
  ];

  return (
    <View style={styles.content}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.role === 'user') {
            return <UserChatItem message={item.message} />;
          }
          return <AssistantChatItem message={item.message} />;
        }}
        inverted
        style={styles.flatList}
      />
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder='Message'
          placeholderTextColor={'grey'}
          multiline
        />
        <Pressable style={styles.button}>
          <SendLogo fill={'#fff'} />
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingBottom: 10,
    flexDirection: 'column',
    backgroundColor: '#141414',
  },
  flatList: { flex: 1, marginBottom: 12 },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    color: '#fff',
    maxHeight: 100,
    borderWidth: 1,
    borderColor: 'grey',
    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    fontSize: 14,
    marginRight: 12,
  },
  button: {
    backgroundColor: '#28a08c',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
