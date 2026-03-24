import { AuthCtas } from "@/components/marketing/AuthCtas";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Circle, Paragraph, Text, XStack, YStack } from "tamagui";

export default function MobileLandingPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack
        flex={1}
        bg="$background"
        px="$5"
        py="$5"
        justifyContent="space-between"
      >
        <YStack gap="$6">
          <XStack ai="center" gap="$3">
            <Circle size="$5" bg="$blue10">
              <Ionicons name="school-outline" color="white" size={20} />
            </Circle>
            <Text fontSize="$8" fontWeight="800">
              Loop Maths
            </Text>
          </XStack>

          <YStack gap="$4" pt="$4">
            <Text
              fontSize="$11"
              fontWeight="900"
              lineHeight="$11"
              letterSpacing={-1}
              maxWidth={420}
            >
              Maths practice that feels rewarding.
            </Text>

            <Paragraph size="$6" color="$gray11" maxWidth={420}>
              Curriculum-aligned learning for Australian high school students,
              with short lessons, instant feedback, and motivating progress.
            </Paragraph>
          </YStack>

          <XStack gap="$3" flexWrap="wrap">
            <XStack
              ai="center"
              gap="$2"
              px="$3"
              py="$2"
              bg="$blue2"
              borderRadius="$10"
            >
              <Ionicons name="book-outline" size={16} />
              <Text fontSize="$3" fontWeight="700">
                Short lessons
              </Text>
            </XStack>

            <XStack
              ai="center"
              gap="$2"
              px="$3"
              py="$2"
              bg="$green2"
              borderRadius="$10"
            >
              <Ionicons name="flame-outline" size={16} />
              <Text fontSize="$3" fontWeight="700">
                Daily streaks
              </Text>
            </XStack>
          </XStack>
        </YStack>

        <YStack gap="$4">
          <AuthCtas stacked />
          <Paragraph size="$3" ta="center" color="$gray10">
            Start with web today, with mobile-ready foundations built in.
          </Paragraph>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
}
