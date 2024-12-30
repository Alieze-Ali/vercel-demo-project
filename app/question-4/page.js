// Import necessary components and styles
import QuestionLayout from "../components/QuestionsLayout";
import SubjectLine from "../components/SubjectLine"; // Component for the subject line
import AnswerSection from "../components/AnswerSection"; // Component for rendering answer sections
import styles from "../components/Answer.module.css"; // Styles for the answer container

export default function Question4() {
  const answer = {
    title: "Answer",
    subject: "Clara, Ready to Transform Your Marketing Team’s Web Experience?",
    greeting: "Hi Clara,",
    content: [
      {
        paragraphs: [
          "Welcome to Vercel! Vercel is a platform designed to help teams like yours create and manage fast, reliable, and highly engaging websites without needing a technical background.",
          "We handle all the behind-the-scenes infrastructure—like hosting, security, and performance optimization—so you can focus on delivering amazing content and campaigns.",
          "Plus, with built-in tools for analytics and user insights, you can easily track and improve your site’s performance to meet your marketing goals.",
        ],
      },
      {
        paragraphs: [
          "To help you get started, check out this beginner-friendly video to walk you through Vercel's key features and how they align with your marketing goals.",
        ],
        links: [
          {
            text: "Vercel Product Walkthrough",
            url: "https://youtu.be/sPmat30SE4k?si=BwgGXnFmZIpQUJyD",
          },
        ],
      },
      {
        paragraphs: [
          "Let me know if that sounds helpful—I’m here to support you every step of the way!",
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
    <QuestionLayout
      title="Question 4"
      questionContent={[
        "An Enterprise customer who has been sold Vercel through a reseller called Sitecore has reached out to the team to ask about the product. Can you give a brief 2–5 sentence introduction to Vercel to showcase what Vercel does?",
      ]}
      subParts={[
        "Your new Enterprise customer is Acme Universityʼs Marketing Department and their lead point person is called Clara (she/her). They have no web development background and donʼt know what Vercel is.",
      ]}
    >
      {/* Answer Container */}
      <div className={styles.answerContainer}>
        {/* Answer Title */}
        <h1 className={styles.answerTitle}>{answer.title}</h1>

        {/* Subject Line */}
        <SubjectLine subject={answer.subject} />

        {/* Greeting */}
        <p className={styles.answerParagraph}>{answer.greeting}</p>

        {/* Answer Sections */}
        {answer.content.map((section, index) => (
          <AnswerSection key={index} section={section} />
        ))}

        {/* Render the signature */}
        <footer className={styles.answerFooter}>
          <p>Best,</p>
          <p>{answer.signature.name}</p>
          <p>{answer.signature.title}</p>
          <p>{answer.signature.email}</p>
        </footer>
      </div>
    </QuestionLayout>
  );
}
