// PlaybackControls.js
// This component represents playback controls for the streaming application.
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PlaybackControls = ({ onPlay, onPause, onRewind, onFastForward }) => {
  return (
    <View style={styles.controls}>
      <TouchableOpacity onPress={onRewind}>
        <Text style={styles.controlButton}>Rewind</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlay}>
        <Text style={styles.controlButton}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPause}>
        <Text style={styles.controlButton}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onFastForward}>
        <Text style={styles.controlButton}>Fast Forward</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 16,
  },
  controlButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default PlaybackControls;
