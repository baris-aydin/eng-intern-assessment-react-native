
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface ControlButtonsProps {
  isRunning: boolean;
  isPaused: boolean;
  startStopwatch: () => void;
  stopStopwatch: () => void;
  resetStopwatch: () => void;
}

  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = 0;

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
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

const StopWatchButton: React.FC<ControlButtonsProps> = ({
  isRunning,
  isPaused,
  startStopwatch,
  stopStopwatch,
  resetStopwatch
}) => {
  const styles = StyleSheet.create({
    controlButtons: {
      // Style for control buttons container
      flexDirection: 'row', // Arrange buttons in a row
      justifyContent: 'space-around', // Evenly space out buttons
    },
    // ... other styles if needed
  });

  return (
    <View style={styles.controlButtons}>
      {/* Start Button */}
      <Button onPress={startStopwatch} title="Start" disabled={isRunning && !isPaused} />

      {/* Stop/Resume Button */}
      <Button onPress={stopStopwatch} title={isPaused ? "Resume" : "Stop"} disabled={!isRunning} />

      {/* Reset Button */}
      <Button onPress={resetStopwatch} title="Reset" disabled={!isRunning && elapsedTime === 0} />
    </View>
  );
};

export default StopWatchButton;
