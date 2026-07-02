import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type PlaceholderScreenProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function PlaceholderScreen({
  title,
  subtitle,
  children,
}: PlaceholderScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>EventPass</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    padding: 24,
  },
  content: {
    gap: 12,
  },
  eyebrow: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  title: {
    color: '#111827',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0,
  },
  subtitle: {
    color: '#4B5563',
    fontSize: 17,
    lineHeight: 24,
  },
});
