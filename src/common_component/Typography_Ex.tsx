import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Typography from './Typography';

const Typography_Ex = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Typography value="이건 제목이에요!" type="title" />
      <Typography value="소제목이구요~" type="subtitle" />
      <Typography value="본문입니다 ^^" />
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

export default Typography_Ex;
