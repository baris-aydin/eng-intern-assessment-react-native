
import { View, Text, StyleSheet } from 'react-native';
//import React, { useState, useEffect } from 'react';


interface StopWatchProps {
  elapsedTime: number;
}

const StopWatch: React.FC<StopWatchProps> = ({ elapsedTime }) => {
  const styles = StyleSheet.create({
    timer: {
      // Style for timer view
    },
    digits: {
      // Style for text
      color: 'black', // Example color
    },
    stopWatch: {
      flex: 1,
    },
    // other styles...
  });

  return (
    <View style={styles.stopWatch}>
      <View style={styles.timer}>
        <Text style={styles.digits}>
          {("0" + Math.floor((elapsedTime / 60000) % 60)).slice(-2)}:
        </Text>
        <Text style={styles.digits}>
          {("0" + Math.floor((elapsedTime / 1000) % 60)).slice(-2)}.
        </Text>
        <Text style={styles.digits}>
          {("0" + ((elapsedTime / 10) % 100)).slice(-2)}
        </Text>
      </View>
    </View>
  );
};

export default StopWatch;