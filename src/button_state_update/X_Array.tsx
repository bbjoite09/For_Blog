import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';

const X_Dictionary = () => {
  const [isSelect, setSelect] = useState([false, false, false]);

  const getButton = (id: number) => {
    return (
      <Pressable
        style={[
          styles.buttonContainer,
          {backgroundColor: isSelect[id] ? 'green' : 'yellow'},
        ]}
        onPress={() => {
          let tempSelect = isSelect;
          tempSelect[id] = !tempSelect[id];
          setSelect(tempSelect);
        }}>
        <Text>Color Change Button</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      {getButton(0)}
      {getButton(1)}
      {getButton(2)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 30,
    marginBottom: 15,
  },
});

export default X_Dictionary;
