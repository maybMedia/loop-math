import { AuthScreen } from "@/components/auth/AuthScreen";
import { supabase } from "@/lib/supabase";
import * as Linking from "expo-linking";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Button, Input, Paragraph, Separator, Text, YStack } from "tamagui";

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

    const redirectTo = Linking.createURL("/home");

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <AuthScreen
      title="Welcome back"
      subtitle="Sign in to continue your maths journey."
    >
      <YStack gap="$4">
        <Input
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          size="$5"
          borderRadius="$8"
        />

        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          size="$5"
          borderRadius="$8"
        />

        <Button
          onPress={handleSignIn}
          disabled={loading}
          size="$5"
          borderRadius="$8"
        >
          {loading ? "Signing in..." : "Sign in"}
        </Button>

        <Separator />

        <Button
          theme="blue"
          variant="outlined"
          onPress={handleGoogleSignIn}
          disabled={loading}
          size="$5"
          borderRadius="$8"
        >
          Continue with Google
        </Button>

        {!!message && (
          <Paragraph color="$red10" ta="center">
            {message}
          </Paragraph>
        )}

        <Paragraph ta="center" color="$gray10">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" asChild>
            <Text color="$blue10" fontWeight="700">
              Create one
            </Text>
          </Link>
        </Paragraph>
      </YStack>
    </AuthScreen>
  );
}
