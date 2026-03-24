import { supabase } from "@/lib/supabase";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { useState } from "react";
import { Button, H3, Input, Paragraph, YStack } from "tamagui";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    setMessage("Account created. Check your email if confirmation is enabled.");
    router.replace("/home");
  };

  const handleGoogleSignUp = async () => {
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
      setMessage("Could not start Google sign-up.");
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <YStack flex={1} px="$5" py="$7" justifyContent="center">
      <YStack gap="$4" maxWidth={420} width="100%" alignSelf="center">
        <H3>Create account</H3>

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

        <Button onPress={handleSignUp} disabled={loading}>
          {loading ? "Creating account..." : "Sign up"}
        </Button>

        <Button theme="blue" onPress={handleGoogleSignUp} disabled={loading}>
          Continue with Google
        </Button>

        {!!message && <Paragraph>{message}</Paragraph>}
      </YStack>
    </YStack>
  );
}
