import { useAuth } from "@/providers/AuthProvider";
import { router } from "expo-router";
import { useEffect } from "react";
import { Paragraph, Spinner, YStack } from "tamagui";

export default function AuthCallbackPage() {
  const { session, loading } = useAuth();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (session) {
      router.replace("/home");
      return;
    }

    router.replace("/sign-in");
  }, [loading, session]);

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" gap="$3" px="$5">
      <Spinner size="large" />
      <Paragraph>Completing sign-in...</Paragraph>
    </YStack>
  );
}
