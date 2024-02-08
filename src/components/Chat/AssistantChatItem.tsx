import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AssistantChatItemType = {
  message: string;
};

const AssistantChatItem = ({ message }: AssistantChatItemType) => {
  return (
    <View style={styles.container}>
      <View style={styles.tailContainer}>
        <View style={styles.tailContent} />
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default AssistantChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    maxWidth: '50%',
  },
  tailContainer: {
    backgroundColor: '#dcdcdc',
    justifyContent: 'flex-end',
  },
  tailContent: {
    backgroundColor: '#141414',
    flex: 1,
    width: 20,
    alignSelf: 'flex-end',
    borderBottomEndRadius: 10,
  },
  messageContainer: {
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  message: {
    color: '#000',
    lineHeight: 20,
    fontSize: 14,
  },
});
