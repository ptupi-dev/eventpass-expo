import { Link, router } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import { PlaceholderScreen } from '@/components/PlaceholderScreen';

export default function LoginScreen() {
  return (
    <PlaceholderScreen
      title="Login"
      subtitle="Placeholder for the authentication flow."
    >
      <Link
        asChild
        replace
        href={'/home'}
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Force home</Text>
        </Pressable>
      </Link>
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563EB',
    borderRadius: 8,
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 48,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
