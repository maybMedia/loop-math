import { Ionicons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Circle, Text, YStack } from "tamagui";

type Props = PropsWithChildren<{
  title: string;
  subtitle: string;
}>;

export function AuthScreen({ title, subtitle, children }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} bg="$background" px="$5" py="$6" justifyContent="center">
        <YStack
          gap="$5"
          width="100%"
          maxWidth={460}
          alignSelf="center"
          p="$5"
          borderWidth={1}
          borderColor="$borderColor"
          borderRadius="$10"
          bg="$background"
        >
          <YStack gap="$4" ai="center">
            <Circle size="$6" bg="$blue10">
              <Ionicons name="school-outline" color="white" size={22} />
            </Circle>
            <YStack gap="$2" ai="center">
              <Text fontSize="$9" fontWeight="900">
                {title}
              </Text>
              <Text color="$gray10" ta="center">
                {subtitle}
              </Text>
            </YStack>
          </YStack>

          {children}
        </YStack>
      </YStack>
    </SafeAreaView>
  );
}
