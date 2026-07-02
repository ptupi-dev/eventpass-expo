import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import { PlaceholderScreen } from '@/components/PlaceholderScreen';

export default function HomeScreen() {
  return (
    <PlaceholderScreen
      title="Home"
      subtitle="Placeholder for event discovery."
    >
      <Link
        asChild
        href={{
          pathname: '/ticket/[id]',
          params: { id: 'ticket-001' }
        }}
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Open sample ticket</Text>
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
