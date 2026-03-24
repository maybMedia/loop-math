import { supabase } from "@/lib/supabase";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { useState } from "react";
import { Button, H3, Input, Paragraph, YStack } from "tamagui";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.replace("/home");
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setMessage("");

    const redirectTo = Linking.createURL("/auth/callback");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
        skipBrowserRedirect: false,
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    if (!data?.url) {
      setMessage("Could not start Google sign-in.");
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <YStack flex={1} px="$5" py="$7" justifyContent="center">
      <YStack gap="$4" maxWidth={420} width="100%" alignSelf="center">
        <H3>Sign in</H3>

        <Input
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleSignIn} disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>

        <Button theme="blue" onPress={handleGoogleSignIn} disabled={loading}>
          Continue with Google
        </Button>

        {!!message && <Paragraph>{message}</Paragraph>}
      </YStack>
    </YStack>
  );
}
