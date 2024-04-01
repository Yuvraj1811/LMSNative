import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

const TextDynamic = () => {
  const text = [
    'Empowering Tomorrow, Today: Innovate, Integrate,\n    Illuminate with Pytosoft IT Solution Pvt. Ltd',
    'Lead Flow Analysis Data\n     Analysis Mastery',
    'Lead Flow Analysis Machine\n        Learning Mastery',
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % text.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <View style={{bottom:100, alignItems: 'center'}}>
      {text.map((text, index) => (
        <Text
          key={index}
          style={[
            styles.text,
            currentTextIndex === index ? null : {display: 'none'},
          ]}>
          {text}
        </Text>
      ))}
    </View>
  );
};

export default TextDynamic;

const styles = StyleSheet.create({
  text: {
    color: '#2F80ED',
    fontFamily: 'Nunito-Medium',
    fontSize: 12,
  },
});
