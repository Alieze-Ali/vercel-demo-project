// Import necessary components and styles
import QuestionLayout from "../components/QuestionsLayout"; // Layout for the question
import SubjectLine from "../components/SubjectLine"; // Component for the subject line
import AnswerSection from "../components/AnswerSection"; // Component for rendering answer sections
import Navigation from "../components/Nav"; // Navigation component
import styles from "../components/Answer.module.css"; // Styles for the answer container

export default function Question2() {
  const answer = {
    title: "Answer",
    subject: "Personalizing Your Online Shop with Vercel, Next.js, and Statsig",
    greeting: "Hey Trevor,",
    content: [
      {
        paragraphs: [
          "Thanks for reaching out! Personalization is a powerful way to create a seamless shopping experience, and Vercel’s platform combined with Next.js and Statsig can make it both efficient and scalable. Let’s dive into how Edge Functions, Serverless Functions, and Edge Middleware fit into this—and how they align with your use case of geolocation-based restrictions for alcohol delivery.",
        ],
      },
      {
        sectionTitle: "Quick Overview",
        unorderedList: [
          {
            title: "Edge Functions",
            details: [
              "What They Do: Run at the edge of Vercel’s global network, close to users, for low-latency tasks.",
              "When to Use: Perfect for real-time personalization, like tailoring content or checking geolocation.",
              "Example: Validate a user's geolocation and customize their shopping experience in milliseconds.",
            ],
          },
          {
            title: "Serverless Functions",
            details: [
              "What They Do: Handle backend logic in the cloud, not necessarily at the edge.",
              "When to Use: Great for tasks like database interactions, heavy processing, or scheduled jobs.",
              "Example: Fetch inventory data or process orders that don’t require immediate user feedback.",
            ],
          },
          {
            title: "Edge Middleware",
            details: [
              "What It Does: Runs lightweight code before a request reaches your application, enabling geolocation-based logic.",
              "When to Use: Ideal for handling authentication, A/B testing, or geolocation-based content delivery.",
              "Example: Dynamically block or modify responses based on a user’s location.",
            ],
          },
        ],
      },
      {
        sectionTitle: "Your Use Case: Geolocation-Based Personalization",
        unorderedList: [
          "Leverage Edge Middleware for geolocation-based logic.",
          "Integrate Statsig to dynamically manage feature flags and rules for restricted regions.",
        ],
      },
      {
        sectionTitle: "Example Implementation",
        paragraphs: [
          "Here’s how your middleware could look for blocking alcohol delivery in restricted regions:",
        ],
        code: `import { NextResponse } from 'next/server';
import Statsig from 'statsig-node';

const RESTRICTED_REGIONS = ['US', 'CA']; // Example regions

export async function middleware(request) {
  const country = request.geo?.country || 'unknown';
  const isInRestrictedRegion = RESTRICTED_REGIONS.includes(country);

  await Statsig.initialize(process.env.STATSIG_API_KEY);

  const blockDelivery = await Statsig.getVariation(
    'block_delivery',
    { isInRestrictedRegion },
    'default'
  );

  if (blockDelivery === 'block') {
    return NextResponse.json(
      { error: 'Delivery to your region is not available.' },
      { status: 403 }
    );
  }

  return NextResponse.next();
}`,
      },
      {
        sectionTitle: "Resources to Explore",
        links: [
          {
            text: "Edge Functions Explained (Video)",
            url: "https://youtu.be/yuxd2kurpzk?si=vZqc1uaV2W30nU2E",
          },
          {
            text: "Edge Middleware Documentation",
            url: "https://vercel.com/docs/functions/edge-middleware",
          },
          {
            text: "Using Statsig with Next.js",
            url: "https://docs.google.com/document/d/1nsmBANCuMKwVz2JKsYFadtxoaSo6al6RJ9t6UAZz6nM/edit?usp=sharing",
          },
        ],
      },
      {
        paragraphs: [
          "Let me know if you'd like to explore this further or if any questions pop up—I’m here to help!",
        ],
      },
    ],
    signature: {
      name: "Alieze",
      title: "Customer Success Manager",
      email: "alieze@vercel.com",
    },
  };

  return (
    <div>
      <QuestionLayout
        title="Question 2"
        questionContent={[
          "A customer has reached out asking, when should I choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel? Please reply to the customer.",
        ]}
        subParts={[
          "Your Enterprise customer is Trevor (they/them), a frontend developer at a winery using Next.js and Statsig. They are primarily interested in being able to use the Vercel platform with Next.js to do personalization for their online shop based on geolocation (some places donʼt allow for shipping of alcohol via delivery).",
        ]}
      >
        {/* Answer Container */}
        <div className={styles.answerContainer}>
          {/* Answer Title */}
          <h1 className={styles.answerTitle}>{answer.title}</h1>

          {/* Subject Line */}
          <SubjectLine subject={answer.subject} />

          {/* Greeting */}
          <p className={styles.answerGreeting}>{answer.greeting}</p>

          {/* Render Answer Sections */}
          {answer.content.map((section, index) => {
            if (section.unorderedList) {
              return (
                <div key={index} className={styles.answerSection}>
                  <h3 className={styles.contentTitle}>
                    {section.sectionTitle}
                  </h3>
                  <ul className={styles.unorderedList}>
                    {section.unorderedList.map((item, idx) => {
                      if (typeof item === "object") {
                        return (
                          <li key={idx}>
                            <strong>{item.title}:</strong>
                            <ul>
                              {item.details.map((detail, i) => (
                                <li key={i} className={styles.answerParagraph}>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      }
                      return (
                        <li key={idx} className={styles.answerParagraph}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }
            return <AnswerSection key={index} section={section} />;
          })}

          {/* Render the signature */}
          <footer className={styles.answerFooter}>
            <p>Best,</p>
            <p>{answer.signature.name}</p>
            <p>{answer.signature.title}</p>
            <p>{answer.signature.email}</p>
          </footer>
        </div>
      </QuestionLayout>

      {/* Bottom Navigation */}
      <footer className={styles.bottomNavigation}>
        <Navigation />
      </footer>
    </div>
  );
}
