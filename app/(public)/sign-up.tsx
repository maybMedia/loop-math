import { AuthScreen } from "@/components/auth/AuthScreen";
import { supabase } from "@/lib/supabase";
import * as Linking from "expo-linking";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Button, Input, Paragraph, Separator, Text, YStack } from "tamagui";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    setLoading(true);
    setMessage("");

    const trimmedEmail = email.trim().toLowerCase();
    const redirectTo = Linking.createURL("/home");

    const { data, error } = await supabase.auth.signUp({
      email: trimmedEmail,
      password,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);

    if (!data.session) {
      router.replace({
        pathname: "/check-email",
        params: { email: trimmedEmail },
      });
      return;
    }

    router.replace("/home");
  };

  const handleGoogleSignUp = async () => {
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
      title="Create your account"
      subtitle="Start building confidence with short, rewarding maths practice."
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
          onPress={handleSignUp}
          disabled={loading}
          size="$5"
          borderRadius="$8"
        >
          {loading ? "Creating account..." : "Sign up"}
        </Button>

        <Separator />

        <Button
          theme="blue"
          variant="outlined"
          onPress={handleGoogleSignUp}
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
          Already have an account?{" "}
          <Link href="/sign-in" asChild>
            <Text color="$blue10" fontWeight="700">
              Sign in
            </Text>
          </Link>
        </Paragraph>
      </YStack>
    </AuthScreen>
  );
}
