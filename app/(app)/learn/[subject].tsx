import { useLocalSearchParams } from "expo-router";
import { Text, YStack } from "tamagui";

export default function SubjectScreen() {
  const { subject } = useLocalSearchParams<{ subject?: string }>();

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" padding="$4">
      <Text>Subject: {subject ?? "unknown"}</Text>
    </YStack>
  );
}
