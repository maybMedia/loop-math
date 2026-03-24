import { router } from "expo-router";
import { Button, H2, Paragraph, XStack, YStack } from "tamagui";

export default function LandingPage() {
  return (
    <YStack flex={1} px="$5" py="$7" bg="$background" justifyContent="center">
      <YStack gap="$5" maxWidth={720} alignSelf="center" width="100%">
        <YStack gap="$3">
          <H2>Loop Maths</H2>
          <Paragraph size="$6">
            Duolingo-style maths practice for Australian high school students.
          </Paragraph>
          <Paragraph theme="alt2">
            Short lessons, instant feedback, streaks, and curriculum-aligned
            progress.
          </Paragraph>
        </YStack>

        <XStack gap="$3" flexWrap="wrap">
          <Button size="$4" onPress={() => router.push("/sign-up")}>
            Get started
          </Button>
          <Button
            size="$4"
            variant="outlined"
            onPress={() => router.push("/sign-in")}
          >
            Sign in
          </Button>
        </XStack>
      </YStack>
    </YStack>
  );
}
