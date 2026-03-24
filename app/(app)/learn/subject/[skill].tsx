import { useLocalSearchParams } from "expo-router";
import { Text, YStack } from "tamagui";

export default function SkillScreen() {
  const { skill } = useLocalSearchParams<{ skill?: string }>();

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" padding="$4">
      <Text>Skill: {skill ?? "unknown"}</Text>
    </YStack>
  );
}
