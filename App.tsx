import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import StopWatch from './src/StopWatch';
import StopWatchButton from './src/StopWatchButton';

const App = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval: number | null = null;

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 10);
      }, 10) as unknown as number; 
    } else if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isRunning, isPaused]);

  const startStopwatch = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const stopStopwatch = () => {
    setIsPaused(!isPaused);
  };

  const resetStopwatch = () => {
    setElapsedTime(0);
    setIsRunning(false);
    setIsPaused(true);
  };

  // Define your styles
  const styles = StyleSheet.create({
    container: {
      flex: 1, // Takes up the whole screen
      justifyContent: 'center', // Centers children vertically in the container
      alignItems: 'center', // Centers children horizontally in the container
      backgroundColor: '#F5FCFF', // Light blue background color
      padding: 20, // Adds some padding around the container
    },
  });
  

  return (
    <View style={styles.container}>
      <StopWatch elapsedTime={elapsedTime} />
      <StopWatchButton 
        isRunning={isRunning}
        isPaused={isPaused}
        startStopwatch={startStopwatch}
        stopStopwatch={stopStopwatch}
        resetStopwatch={resetStopwatch}
      />
    </View>
  );
};

export default App;
