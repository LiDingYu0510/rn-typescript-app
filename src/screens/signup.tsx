import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Input} from '../components';

const App: FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <Text>Sign up Screen</Text>
      <Input
        placeholder="name"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <Input
        placeholder="email"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <Input
        placeholder="password"
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Button title="signup" onPress={() => console.log('hihi')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
