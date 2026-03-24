import { AuthScreen } from "@/components/auth/AuthScreen";
import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { Button, Circle, Paragraph, Text, YStack } from "tamagui";

export default function CheckEmailPage() {
  const params = useLocalSearchParams<{ email?: string }>();
  const email =
    typeof params.email === "string" && params.email.length > 0
      ? params.email
      : null;

  return (
    <AuthScreen
      title="Check your email"
      subtitle="We&apos;ve sent you a confirmation link to finish creating your account."
    >
      <YStack gap="$5" ai="center">
        <Circle size="$8" bg="$blue3">
          <Ionicons name="mail-outline" size={28} />
        </Circle>

        <YStack gap="$3" width="100%">
          <Paragraph ta="center" color="$gray11">
            {email ? (
              <>
                We sent a confirmation email to{" "}
                <Text fontWeight="700">{email}</Text>. Open it and tap the link
                to finish creating your account.
              </>
            ) : (
              <>
                Open the email we sent and tap the confirmation link to finish
                creating your account.
              </>
            )}
          </Paragraph>

          <Paragraph ta="center" color="$gray10" size="$3">
            Didn&apos;t get anything? Check your spam or junk folder.
          </Paragraph>
        </YStack>

        <Link href="/sign-in" asChild>
          <Button size="$5" borderRadius="$8" width="100%">
            Back to sign in
          </Button>
        </Link>

        <Paragraph ta="center" color="$gray10">
          Need to use a different email?{" "}
          <Link href="/sign-up" asChild>
            <Text color="$blue10" fontWeight="700">
              Try again
            </Text>
          </Link>
        </Paragraph>
      </YStack>
    </AuthScreen>
  );
}
