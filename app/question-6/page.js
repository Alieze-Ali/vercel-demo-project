// Import necessary components and styles
import QuestionLayout from "../components/QuestionsLayout";
import SubjectLine from "../components/SubjectLine"; // Component for the subject line
import AnswerSection from "../components/AnswerSection"; // Component for rendering answer sections
import styles from "../components/Answer.module.css"; // Styles for the answer container

export default function Question6() {
  const answer = {
    title: "Answer",
    subject: "Clarifying Your MIUs and Managing Overages",
    greeting: "Hi there,",
    content: [
      {
        paragraphs: [
          "Thanks for reaching out about your billing concerns—I totally understand how unexpected overages can be frustrating. Let me break this down for you and offer some ways to avoid these costs in the future.",
        ],
      },
      {
        sectionTitle: "1. Why Your MIUs Didn’t Cover the Bill",
        paragraphs: [
          "Managed Infrastructure Units (MIUs) are part of your monthly plan, and while they cover your usage for that specific month, they don’t roll over to the next month. This is because MIUs are structured to maintain predictable costs for your plan.",
          "Your recent overage bill came mostly from fast data transfer and function duration, which work separately from MIUs. These charges happen when there’s more traffic or larger workloads that exceed what’s included in your plan.",
        ],
      },
      {
        sectionTitle: "2. How to Mitigate Overages",
        unorderedList: [
          "Track Your Usage: Use the Vercel Analytics Dashboard to spot any usage spikes before they lead to overages.",
          "Optimize Data Transfers: Utilize CDN caching to speed up frequently accessed files and reduce server load. Optimizing images and other assets can also make a big difference.",
          "Improve Function Efficiency: Take a closer look at your serverless functions. Streamlining their code or switching to Edge Functions can help reduce the duration and associated costs.",
          "Consider Plan Adjustments: If overages are becoming a trend, upgrading your plan might better match your team’s current needs and growth.",
        ],
      },
      {
        sectionTitle: "3. Helpful Resources",
        links: [
          {
            text: "Vercel Billing Documentation",
            url: "https://vercel.com/docs/pricing/understanding-my-invoice",
          },
          {
            text: "Next.js Optimization Tips",
            url: "https://nextjs.org/docs/app/building-your-application/deploying/production-checklist",
          },
        ],
      },
      {
        paragraphs: [
          "If you’d like, I’d be happy to set up a call to review your usage and help identify more specific ways to optimize costs. Just let me know what works best for you!",
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
      title="Question 6"
      questionContent={[
        "An Enterprise customer, new to Next.js and Vercel, asks about a high usage bill regarding fast origin transfer and fast data transfer. They have two questions:",
      ]}
      subParts={[
        "Why didnʼt my MIUs cover this bill? I didnʼt use all my MIUs last month…so why didnʼt those roll over?",
        "What would be the best way to help mitigate this so we donʼt see these overage bills in the future?",
        "Feel free to use AI to help supplement your answer, but only use AI to help guide your answer and put it into your own words. Help the customer by providing Vercel or Next.js resources if necessary.",
        "Your Enterprise customer is an SMB customer, under 50 employees, with an ARR of $18,500. Their last overage bill was $1,800 and consisted primarily of fast data transfer and function duration.",
        "MIU == Managed Infrastructure Unit and is a monthly entitlement for usage purchased by a customer that does not roll over every month.",
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

