import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { getAPIKey, saveAPIKey } from 'src/services/apiKey';
import { chatClient } from 'src/services/openai';

const Dashboard = () => {
  const [key, setKey] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{'Enter generated API Key'}</Text>
        <TextInput
          style={styles.textInput}
          value={key}
          onChangeText={setKey}
          placeholder='API Key'
          placeholderTextColor={'grey'}
        />
        <Pressable
          onPress={() => {
            saveAPIKey(key);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{'Continue'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 16,
    borderRadius: 14,
    fontSize: 16,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#28a08c',
    alignSelf: 'stretch',
    padding: 16,
    borderRadius: 14,
    fontSize: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
