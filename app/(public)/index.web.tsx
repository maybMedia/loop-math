import { AuthCtas } from "@/components/marketing/AuthCtas";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { ScrollView } from "react-native";
import { Card, H1, H2, Paragraph, Text, XStack, YStack } from "tamagui";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <YStack gap="$2" minWidth={140}>
      <Text fontSize={32} lineHeight={36} fontWeight="900" color="#0F172A">
        {value}
      </Text>
      <Text fontSize="$4" color="#475569">
        {label}
      </Text>
    </YStack>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
}) {
  return (
    <Card
      flex={1}
      minWidth={260}
      p="$5"
      borderRadius={24}
      bg="#FFFFFF"
      borderWidth={1}
      borderColor="#DCE7F5"
      shadowColor="#0F172A"
      shadowOpacity={0.06}
      shadowRadius={18}
      shadowOffset={{ width: 0, height: 8 }}
    >
      <YStack gap="$4">
        <YStack
          width={52}
          height={52}
          ai="center"
          jc="center"
          br={16}
          bg="#E0F2FE"
        >
          <Ionicons name={icon} size={22} color="#0369A1" />
        </YStack>
        <Text fontSize="$7" fontWeight="800" color="#0F172A">
          {title}
        </Text>
        <Paragraph color="#475569" lineHeight={26}>
          {description}
        </Paragraph>
      </YStack>
    </Card>
  );
}

function PreviewCard() {
  return (
    <Card
      flex={1}
      minWidth={320}
      maxWidth={440}
      p="$5"
      borderRadius={28}
      bg="#0F172A"
      borderWidth={1}
      borderColor="#1E293B"
      shadowColor="#020617"
      shadowOpacity={0.18}
      shadowRadius={26}
      shadowOffset={{ width: 0, height: 14 }}
    >
      <YStack gap="$4">
        <XStack ai="center" jc="space-between" gap="$3">
          <YStack gap="$2" flex={1}>
            <Text fontSize="$8" fontWeight="900" color="#F8FAFC">
              Student dashboard
            </Text>
            <Text color="#94A3B8">
              Focused practice, visible progress, and quick wins.
            </Text>
          </YStack>
          <XStack px="$3" py="$2" br={999} bg="#082F49" ai="center" gap="$2">
            <Ionicons name="flame-outline" size={16} color="#e78e08" />
            <Text color="#7DD3FC" fontWeight="800">
              4 day streak
            </Text>
          </XStack>
        </XStack>

        <YStack p="$4" bg="#111C2D" borderRadius={22} gap="$3">
          <XStack ai="center" jc="space-between" gap="$3">
            <YStack gap="$1" flex={1}>
              <Text color="#F8FAFC" fontWeight="800">
                Continue: Intro to Algebra
              </Text>
              <Text color="#94A3B8">
                Two quick questions left to finish the lesson.
              </Text>
            </YStack>
            <Text color="#FACC15" fontWeight="900">
              82%
            </Text>
          </XStack>
        </YStack>

        <YStack p="$4" bg="#F8FAFC" borderRadius={22} gap="$3">
          <XStack ai="center" jc="space-between">
            <Text color="#0F172A" fontWeight="800">
              Weekly goal
            </Text>
            <Text color="#0369A1" fontWeight="800">
              3 of 5 lessons
            </Text>
          </XStack>
          <YStack h={10} bg="#DBEAFE" br={999} overflow="hidden">
            <YStack h="100%" w="60%" bg="#2563EB" />
          </YStack>
          <Text color="#475569">
            Students can see progress instantly without digging through menus.
          </Text>
        </YStack>

        <XStack gap="$3" flexWrap="wrap">
          <YStack flex={1} minWidth={150} p="$4" bg="#082F49" borderRadius={22}>
            <Text color="#E0F2FE" fontWeight="800">
              Review queue
            </Text>
            <Text color="#BAE6FD" mt="$2">
              Fractions, substitution, perimeter
            </Text>
          </YStack>

          <YStack flex={1} minWidth={150} p="$4" bg="#1E293B" borderRadius={22}>
            <Text color="#E2E8F0" fontWeight="800">
              Instant feedback
            </Text>
            <Text color="#94A3B8" mt="$2">
              Worked steps appear as soon as students need help.
            </Text>
          </YStack>
        </XStack>
      </YStack>
    </Card>
  );
}

export default function WebLandingPage() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F8FBFF" }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator
    >
      <YStack bg="#F8FBFF">
        <YStack
          px="$6"
          py="$4"
          borderBottomWidth={1}
          borderColor="rgba(15, 23, 42, 0.08)"
          bg="rgba(248,251,255,0.96)"
        >
          <XStack
            width="100%"
            maxWidth={1180}
            alignSelf="center"
            ai="center"
            jc="space-between"
            gap="$4"
            flexWrap="wrap"
          >
            <XStack ai="center" gap="$3">
              <YStack
                width={56}
                height={56}
                ai="center"
                jc="center"
                br={18}
                bg="#FFFFFF"
                borderWidth={1}
                borderColor="#DCE7F5"
              >
                <Image
                  source={require("../../assets/icons/favicon.png")}
                  style={{ width: 80, height: 80 }}
                  contentFit="contain"
                />
              </YStack>
              <YStack gap={2}>
                <Text fontSize="$8" fontWeight="900" color="#0F172A">
                  Loop Maths
                </Text>
                <Text fontSize="$3" color="#64748B">
                  Maths practice for Australian secondary students
                </Text>
              </YStack>
            </XStack>

            <AuthCtas />
          </XStack>
        </YStack>

        <YStack
          px="$6"
          py={64}
          bg="linear-gradient(180deg, #F8FBFF 0%, #EEF6FF 100%)"
        >
          <XStack
            width="100%"
            maxWidth={1180}
            alignSelf="center"
            gap="$7"
            flexWrap="wrap"
            ai="center"
          >
            <YStack flex={1.1} minWidth={300} maxWidth={620} gap="$5">
              <XStack
                ai="center"
                gap="$2"
                px="$3"
                py="$2"
                alignSelf="flex-start"
                bg="#E0F2FE"
                borderRadius={999}
              >
                <Ionicons name="sparkles-outline" size={16} color="#0369A1" />
                <Text color="#075985" fontWeight="700">
                  Built for Australian high school maths
                </Text>
              </XStack>

              <H1
                color="#0F172A"
                fontSize={60}
                lineHeight={68}
                letterSpacing={-2}
                fontWeight="900"
              >
                A cleaner, more motivating way to practise maths.
              </H1>

              <Paragraph color="#334155" fontSize="$7" lineHeight={32}>
                Loop Maths helps students stay consistent with short lessons,
                instant feedback, and progress that feels visible from the first
                session.
              </Paragraph>

              <AuthCtas />

              <XStack
                pt="$4"
                gap="$5"
                flexWrap="wrap"
                borderTopWidth={1}
                borderColor="rgba(15, 23, 42, 0.08)"
              >
                <Stat value="5-10 minute" label="lesson sessions" />
                <Stat value="Years 7-10" label="curriculum focus" />
                <Stat value="Gameified" label="making learning fun" />
              </XStack>
            </YStack>

            <PreviewCard />
          </XStack>
        </YStack>

        <YStack px="$6" py={64} bg="#FFFFFF">
          <YStack width="100%" maxWidth={1180} alignSelf="center" gap="$6">
            <YStack gap="$3" maxWidth={760}>
              <Text
                color="#0369A1"
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing={1}
              >
                Why it works
              </Text>
              <H2
                color="#0F172A"
                fontSize={42}
                lineHeight={48}
                fontWeight="900"
              >
                Less friction, better feedback, and clearer momentum.
              </H2>
              <Paragraph color="#475569" fontSize="$6" lineHeight={30}>
                The page now separates the product story into clearer sections,
                with stronger contrast and more stable responsive behavior.
              </Paragraph>
            </YStack>

            <XStack gap="$4" flexWrap="wrap">
              <FeatureCard
                icon="book-outline"
                title="Short, focused lessons"
                description="Students work through concepts in manageable loops instead of long, tiring sessions."
              />
              <FeatureCard
                icon="bulb-outline"
                title="Immediate explanation"
                description="Feedback arrives in the moment, helping students recover quickly when they get stuck."
              />
              <FeatureCard
                icon="flame-outline"
                title="Motivating progress"
                description="Streaks and weekly goals encourage consistency without making the product feel childish."
              />
              <FeatureCard
                icon="stats-chart-outline"
                title="Curriculum aligned"
                description="Practice stays relevant to Australian secondary maths, so effort maps back to classwork."
              />
            </XStack>
          </YStack>
        </YStack>

        <YStack px="$6" py={64} bg="#EAF3FF">
          <YStack width="100%" maxWidth={1180} alignSelf="center" gap="$5">
            <XStack gap="$5" flexWrap="wrap">
              <YStack
                flex={1}
                minWidth={280}
                p="$6"
                borderRadius={28}
                bg="#0F4C81"
                gap="$3"
              >
                <Text
                  color="#BAE6FD"
                  fontWeight="800"
                  textTransform="uppercase"
                >
                  More contrast
                </Text>
                <Text
                  color="#FFFFFF"
                  fontSize={34}
                  lineHeight={40}
                  fontWeight="900"
                >
                  Brighter hero, darker product card, calmer detail sections.
                </Text>
                <Paragraph color="#DBEAFE" lineHeight={28}>
                  Each section now feels distinct without relying on loud fonts
                  or oversized layouts.
                </Paragraph>
              </YStack>

              <YStack
                flex={1}
                minWidth={280}
                p="$6"
                borderRadius={28}
                bg="#FFFFFF"
                borderWidth={1}
                borderColor="#DCE7F5"
                gap="$3"
              >
                <Text
                  color="#0369A1"
                  fontWeight="800"
                  textTransform="uppercase"
                >
                  More usable
                </Text>
                <Text
                  color="#0F172A"
                  fontSize={34}
                  lineHeight={40}
                  fontWeight="900"
                >
                  Responsive sizing and full-page scrolling keep everything
                  reachable.
                </Text>
                <Paragraph color="#475569" lineHeight={28}>
                  The content stays within its sections, wraps safely on smaller
                  widths, and scrolls properly from top to bottom.
                </Paragraph>
              </YStack>
            </XStack>

            <XStack
              ai="center"
              jc="space-between"
              gap="$4"
              flexWrap="wrap"
              pt="$2"
            >
              <YStack gap="$2" maxWidth={620}>
                <Text fontSize="$9" fontWeight="900" color="#0F172A">
                  Ready to get started?
                </Text>
                <Text color="#475569">
                  Sign up for a more focused way to build maths confidence.
                </Text>
              </YStack>

              <AuthCtas />
            </XStack>
          </YStack>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
