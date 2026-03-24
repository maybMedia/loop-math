import { supabase } from "@/lib/supabase";
import { Button, H2, Paragraph, YStack } from "tamagui";

export default function HomePage() {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <YStack flex={1} px="$5" py="$7" gap="$4">
      <H2>Welcome to Loop Maths</H2>
      <Paragraph>
        You’re signed in. Next we’ll build onboarding, then the dashboard, then
        the lesson flow.
      </Paragraph>
      <Button onPress={handleSignOut} alignSelf="flex-start">
        Sign out
      </Button>
    </YStack>
  );
}
