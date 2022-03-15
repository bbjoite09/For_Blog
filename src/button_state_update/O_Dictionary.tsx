import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';

const O_Dictionary = () => {
  const [isSelect, setSelect] = useState<any>({
    id1: false,
    id2: false,
    id3: false,
  });

  const getButton = (id: string) => {
    return (
      <Pressable
        style={[
          styles.buttonContainer,
          {backgroundColor: isSelect[id] ? 'green' : 'yellow'},
        ]}
        onPress={() => {
          setSelect({...isSelect, [id]: !isSelect[id]});
        }}>
        <Text>Color Change Button</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      {getButton('id1')}
      {getButton('id2')}
      {getButton('id3')}
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

export default O_Dictionary;
