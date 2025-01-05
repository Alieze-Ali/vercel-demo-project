import React from "react";
import QuestionLayout from "../components/QuestionsLayout"; // Layout for the question
import SubjectLine from "../components/SubjectLine"; // Component for rendering the subject line
import AnswerSection from "../components/AnswerSection"; // Component for rendering individual answer sections
import Navigation from "../components/Nav"; // Navigation component for bottom navigation
import styles from "../components/Answer.module.css"; // Import styles for consistent design

export default function Question6() {
  const answer = {
    title: "Answer",
    subject: "Clarifying Your MIUs and Managing Overages", // Correct subject line
    greeting: "Hi there,", // Greeting
    content: [
      // Section 1: Why Your MIUs Didn’t Cover the Bill
      {
        sectionTitle: "1. Why Your MIUs Didn’t Cover the Bill",
        paragraphs: [
          "Managed Infrastructure Units (MIUs) are part of your monthly plan, and while they cover your usage for that specific month, they don’t roll over to the next month. This is because MIUs are structured to maintain predictable costs for your plan.",
          "Your recent overage bill came mostly from fast data transfer and function duration, which work separately from MIUs. These charges happen when there’s more traffic or larger workloads that exceed what’s included in your plan.",
        ],
      },
      // Section 2: How to Mitigate Overages
      {
        sectionTitle: "2. How to Mitigate Overages",
        paragraphs: [
          "Here are some practical ways to keep these costs in check:",
        ],
        unorderedList: [
          {
            title: "Track Your Usage",
            details: [
              "Use the Vercel Analytics Dashboard to spot any usage spikes before they lead to overages.",
            ],
          },
          {
            title: "Optimize Data Transfers",
            details: [
              "Utilize CDN caching to speed up frequently accessed files and reduce server load. Optimizing images and other assets can also make a big difference.",
            ],
          },
          {
            title: "Improve Function Efficiency",
            details: [
              "Take a closer look at your serverless functions. Streamlining their code or switching to Edge Functions can help reduce the duration and associated costs.",
            ],
          },
          {
            title: "Consider Plan Adjustments",
            details: [
              "If overages are becoming a trend, upgrading your plan might better match your team’s current needs and growth.",
            ],
          },
        ],
      },
      // Section 3: Helpful Resources
      {
        sectionTitle: "3. Helpful Resources",
        paragraphs: [
          "To support your team, here are a few resources to explore:",
        ],
        links: [
          {
            text: "Vercel Billing Documentation",
            url: "https://vercel.com/docs/pricing/understanding-my-invoice", // Corrected link
          },
          {
            text: "Next.js Optimization Tips",
            url: "https://nextjs.org/docs/app/building-your-application/deploying/production-checklist", // Corrected link
          },
        ],
      },
    ],
    signature: {
      name: "Best regards,", // Closing phrase
      title: "Alieze", // Corrected name
      subtitle: "Customer Success Manager",
    },
  };

  return (
    <div>
      <QuestionLayout
        title="Question 6"
        questionContent={[
          "An Enterprise customer, new to Next.js and Vercel, asks about a high usage bill regarding fast origin transfer and fast data transfer. They have two questions:",
        ]}
        subParts={[
          "Why didn’t my MIUs cover this bill? I didn’t use all my MIUs last month…so why didn’t those roll over?",
          "What would be the best way to help mitigate this so we don’t see these overage bills in the future?",
          "Feel free to use AI to help supplement your answer, but only use AI to help guide your answer and put it into your own words. Help the customer by providing Vercel or Next.js resources if necessary.",
          "Your Enterprise customer is an SMB customer, under 50 employees, with an ARR of $18,500. Their last overage bill was $1,800 and consisted primarily of fast data transfer and function duration.",
          "MIU == Managed Infrastructure Unit and is a monthly entitlement for usage purchased by a customer that does not roll over every month.",
        ]}
      >
        <div className={styles.answerContainer}>
          <h1 className={styles.answerTitle}>{answer.title}</h1>
          <SubjectLine subject={answer.subject} />
          <p className={styles.answerGreeting}>{answer.greeting}</p>
          {answer.content.map((section, index) => (
            <AnswerSection key={index} section={section} />
          ))}
          <footer className={styles.answerFooter}>
            <p>{answer.signature.name}</p>
            <p>{answer.signature.title}</p>
            <p>{answer.signature.subtitle}</p>
          </footer>
        </div>
      </QuestionLayout>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
}
