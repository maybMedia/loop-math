import { router } from "expo-router";
import { Button, XStack, YStack } from "tamagui";

type Props = {
  stacked?: boolean;
};

export function AuthCtas({ stacked = false }: Props) {
  const primaryButtonProps = {
    animation: "quick" as const,
    bg: "#0F4C81",
    color: "white",
    borderWidth: 1,
    borderColor: "#0F4C81",
    fontWeight: "800" as const,
    hoverStyle: {
      bg: "#0C3B65",
      borderColor: "#0C3B65",
    },
    pressStyle: {
      bg: "#0A3153",
      borderColor: "#0A3153",
    },
  };

  if (stacked) {
    return (
      <YStack gap="$3" width="100%">
        <Button
          size="$5"
          borderRadius="$10"
          {...primaryButtonProps}
          onPress={() => router.push("/sign-up")}
        >
          Get started
        </Button>
        <Button
          size="$5"
          borderRadius="$10"
          variant="outlined"
          onPress={() => router.push("/sign-in")}
        >
          Sign in
        </Button>
      </YStack>
    );
  }

  return (
    <XStack gap="$3" flexWrap="wrap">
      <Button
        size="$5"
        borderRadius="$10"
        {...primaryButtonProps}
        onPress={() => router.push("/sign-up")}
      >
        Get started
      </Button>
      <Button
        size="$5"
        borderRadius="$10"
        variant="outlined"
        onPress={() => router.push("/sign-in")}
      >
        Sign in
      </Button>
    </XStack>
  );
}
