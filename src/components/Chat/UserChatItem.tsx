import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type UserChatItemType = {
  message: string;
};

const UserChatItem = ({ message }: UserChatItemType) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View style={styles.tailContainer}>
        <View style={styles.tailContent} />
      </View>
    </View>
  );
};

export default UserChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    maxWidth: '50%',
  },
  tailContainer: {
    backgroundColor: '#28a08c',
    justifyContent: 'flex-end',
  },
  tailContent: {
    backgroundColor: '#141414',
    flex: 1,
    width: 20,
    alignSelf: 'flex-end',
    borderBottomStartRadius: 10,
  },
  messageContainer: {
    backgroundColor: '#28a08c',
    padding: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
  },
  message: {
    color: '#fff',
    lineHeight: 20,
    fontSize: 14,
  },
});
