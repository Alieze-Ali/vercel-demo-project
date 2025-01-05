// Import necessary components and styles
import QuestionLayout from "../components/QuestionsLayout"; // Layout for the question
import SubjectLine from "../components/SubjectLine"; // Component for the subject line
import AnswerSection from "../components/AnswerSection"; // Component for rendering answer sections
import Navigation from "../components/Nav"; // Navigation component
import styles from "../components/Answer.module.css"; // Styles for the answer container

export default function Question3() {
  const answer = {
    title: "Answer", // Main title of the answer section
    subject: "Supporting Your Team and Maximizing Value with Vercel", // Email subject line
    greeting: "Hi Alex,", // Personalized greeting
    content: [
      {
        sectionTitle: null, // No title for the intro section
        paragraphs: [
          "I was reviewing your account and wanted to personally check in to see how we can best support your team. As a valued Enterprise customer, your success with Vercel is a top priority, and I want to ensure you’re making the most of everything your plan has to offer.",
        ],
      },
      {
        sectionTitle: null, // No title for this section
        paragraphs: [
          "With only one developer on your team and Tanner no longer leading the project, I understand that transitions like this can bring challenges. I’d love to connect to better understand how things are going and explore ways Vercel can help bridge any gaps. For example, I’ve noticed some past build errors and would like to discuss opportunities to optimize your setup, including your Cloudflare integration.",
        ],
      },
      {
        sectionTitle: null, // No title for this section
        paragraphs: [
          "Would you be available for a quick chat next week? We can go over any specific challenges and identify ways to make things easier for your team. Afterward, I’d be happy to share resources or involve our technical team if needed.",
        ],
      },
      {
        sectionTitle: null, // No title for this section
        paragraphs: [
          "Looking forward to hearing from you!",
        ],
      },
    ],
    signature: {
      name: "Alieze Ali", // Your name
      title: "Customer Success Manager", // Your title
      email: "alieze@vercel.com", // Your contact information
    },
  };

  return (
    <div>
      {/* Question Layout */}
      <QuestionLayout
        title="Question 3"
        questionContent={[
          "Through use of a monitoring dashboard, you notice that an Enterprise customer has reduced the number of builds and their usage has gone down by about half quarter over quarter. Please write an email to the champion and executive sponsor of the account to re-engage and start to perform some discovery.",
        ]}
        subParts={[
          "Your customer is an SMB with yearly revenue about $5.5 million, 20 employees total with one developer. They have a $22K ARR Vercel subscription. The executive sponsor is the VP of marketing and Vercel hosts their marketing pages. They have a reverse proxy in front of Vercel (Cloudflare) and history shows some errors in their builds. The executive sponsorʼs name is Alex (she/her), Engineering Manager. The champion, Tanner – the lead on the project – it is found out, has left the company.",
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
            <p>Warm regards,</p>
            <p>{answer.signature.name}</p>
            <p>{answer.signature.title}</p>
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
