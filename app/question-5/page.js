import React from "react"; // Ensure React is imported
import QuestionLayout from "../components/QuestionsLayout"; // Layout for the question
import SubjectLine from "../components/SubjectLine"; // Component for the subject line
import AnswerSection from "../components/AnswerSection"; // Component for rendering answer sections
import Navigation from "../components/Nav"; // Navigation component
import styles from "../components/Answer.module.css"; // Styles for the answer container

export default function Question5() {
  const answer = {
    title: "Answer",
    subject: "Helping Optimize Your Usage and Performance on Vercel",
    greeting: "Hi Travis,",
    content: [
      // Introduction
      {
        sectionTitle: null,
        paragraphs: [
          "I hope this email finds you well! I wanted to reach out proactively regarding your account, as I noticed a couple of key areas where we can work together to optimize your experience with Vercel.",
        ],
      },
      // Increased Data Transfer Costs
      {
        sectionTitle: "Increased Data Transfer Costs",
        unorderedList: [
          "Your upcoming billing period reflects a significant increase from $900 to $2,100 due to higher data transfer usage.",
        ],
      },
      // Core Web Vitals Performance
      {
        sectionTitle: "Core Web Vitals Performance",
        unorderedList: [
          "Your website's Largest Contentful Paint (LCP) score indicates room for improvement, which could impact user experience and SEO.",
        ],
      },
      // Tailored Roadmap
      {
        sectionTitle: "Tailored Roadmap",
        paragraphs: [
          "Given these factors and your company's impressive growth trajectory, I’d love to work with you to create a tailored plan that meets your current needs while supporting your future goals. Below is a roadmap to help address these concerns:",
        ],
      },
      // Understanding Usage and Costs
      {
        sectionTitle: "Understanding Usage and Costs",
        paragraphs: [
          "Below are two key areas where we can focus to manage costs effectively:",
        ],
      },
      {
        sectionTitle: "Usage-Based Billing",
        unorderedList: [
          "Vercel's Pro Plan operates on a usage-based billing model. Your recent spike suggests higher traffic or data-heavy operations.",
        ],
      },
      {
        sectionTitle: "Spend Management Tools",
        unorderedList: [
          "To help manage costs moving forward, we can set spend alerts or explore features that automatically take action at specific thresholds.",
        ],
      },
      // Optimizing Performance
      {
        sectionTitle: "Optimizing Performance",
        paragraphs: [
          `Improving LCP Scores: Vercel offers tools like Image Optimization, Edge Functions, and CDN caching to enhance performance. I’ve created a `,
          <a
            href="https://docs.google.com/document/d/1YQHny9IC8H1Ki5nBCR549hq9fDQ_vxZ8qdESOKT4VPw/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Winning Game Plan
          </a>,
          ` tailored to your needs. It includes step-by-step instructions for optimizing your Largest Contentful Paint (LCP) score. Let me know if you’d prefer a live walkthrough or video demonstration to implement these strategies.`,
        ],
      },
      // A Scalable Solution
      {
        sectionTitle: "A Scalable Solution",
        paragraphs: [
          "Given your company’s size ($14M revenue, 100 employees), it may be time to explore the Enterprise Plan. This plan is specifically designed for companies like yours, offering:",
        ],
      },
      {
        sectionTitle: "Customizable Data Transfer Agreements",
        unorderedList: [
          "Better rates and flexibility to scale seamlessly with your traffic.",
        ],
      },
      {
        sectionTitle: "Advanced Security and Support",
        unorderedList: [
          "Features like SaML SSO and enhanced DDoS mitigation for peace of mind.",
        ],
      },
      {
        sectionTitle: "Singapore-Based Edge Network",
        unorderedList: [
          "Faster content delivery and localized assistance to meet your users’ needs.",
        ],
      },
      // Next Steps
      {
        sectionTitle: "Next Steps",
        orderedList: [
          "Let’s schedule a quick call to discuss your goals and how we can fine-tune your Vercel setup.",
          "I’ll prepare a tailored cost comparison between your current plan and the Enterprise Plan to ensure you’re making the most cost-effective decision.",
          "If helpful, I can also share a performance report and guide for boosting your LCP score in the short term.",
        ],
      },
      {
        sectionTitle: null,
        paragraphs: [
          "Ultimately, I want to make sure you have the resources and support to scale effectively, control costs, and provide the best experience for your users.",
          "Please let me know a time that works for you, or feel free to share any immediate questions or feedback. I’m here to help and look forward to championing your success on Vercel!",
        ],
      },
    ],
    signature: {
      name: "Warm regards,",
      title: "Alieze",
      subtitle: "Customer Success Manager",
      email: "alieze@vercel.com",
    },
  };

  return (
    <div>
      {/* Question Layout */}
      <QuestionLayout
        title="Question 5"
        questionContent={[
          "A Pro customer who typically spends $900 monthly on Vercel has experienced a sudden increase to $2,100 for their next billing period due to increased data transfer costs. Their main website also shows poor Core Web Vitals performance, specifically a failed Largest Contentful Paint score. Be proactive in reaching out to this customer about their increased usage and costs. Engage them in a conversation that explores the situation and leads to mutually beneficial solutions.",
        ]}
        subParts={[
          "Your champion is Travis (he/him) and he is the lead developer for a mobile game company, $14 million in revenue, 100 employees/10 Vercel team members. They are NOT an Enterprise customer yet, but have spent on average $900 in the last three months on Vercel. They are headquartered in Singapore.",
        ]}
      >
        {/* Answer Section */}
        <div className={styles.answerContainer}>
          <h1 className={styles.answerTitle}>{answer.title}</h1> {/* Render the answer title */}
          <SubjectLine subject={answer.subject} /> {/* Render the subject line */}
          <p className={styles.answerGreeting}>{answer.greeting}</p> {/* Render the greeting */}

          {/* Render each section of the answer dynamically */}
          {answer.content.map((section, index) => (
            <AnswerSection key={index} section={section} />
          ))}

          {/* Render the signature */}
          <footer className={styles.answerFooter}>
            <p>{answer.signature.name}</p>
            <p>{answer.signature.title}</p>
            <p>{answer.signature.subtitle}</p>
            <p>{answer.signature.email}</p>
          </footer>
        </div>
      </QuestionLayout>

      {/* Bottom Navigation */}
      <footer>
        <Navigation />
      </footer>
    </div>
  );
}
