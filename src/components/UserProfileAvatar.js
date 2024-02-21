// UserProfileAvatar.js
// This component represents the user's profile avatar.
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const UserProfileAvatar = ({ avatarUrl }) => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default UserProfileAvatar;
