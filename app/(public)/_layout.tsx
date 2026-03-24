import { useAuth } from "@/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";
import { Spinner, YStack } from "tamagui";

export default function PublicLayout() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" />
      </YStack>
    );
  }

  if (session) {
    return <Redirect href="/home" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
