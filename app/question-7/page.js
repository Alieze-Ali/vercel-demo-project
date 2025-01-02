// Import necessary components and styles
import QuestionLayout from "../components/QuestionsLayout";
import SubjectLine from "../components/SubjectLine"; // Component for the subject line
import AnswerSection from "../components/AnswerSection"; // Component for rendering answer sections
import Navigation from "../components/Nav"; // Navigation component
import styles from "../components/Answer.module.css"; // Styles for the answer container

export default function Question7() {
  const answer = {
    title: "Answer",
    subject: "Welcome to Vercel Enterprise, Ty!",
    greeting: "Hi Ty,",
    content: [
      {
        paragraphs: [
          "Welcome to Vercel! We’re thrilled to have your team on board. As you explore Vercel Enterprise and Secure Compute, I want to ensure you have everything needed to succeed.",
        ],
      },
      {
        sectionTitle: "Key Resources for Your Success",
        orderedList: [
          {
            title: "Security and Compliance",
            description: `Vercel offers robust features like SSO/SAML login, DDoS protection, WAF (Web Application Firewall), and Secure Compute to establish secure connections between Vercel and your backend environments. `,
            link: {
              text: "Read More.",
              url: "https://vercel.com/docs/security/secure-compute",
            },
          },
          {
            title: "Performance and Scalability",
            description: `Our globally distributed Edge Network, enhanced serverless capabilities, and automatic failover ensure top-tier performance and reliability for large-scale projects. `,
            link: {
              text: "Explore the Edge Network.",
              url: "https://vercel.com/docs/edge-network/overview",
            },
          },
          {
            title: "Enterprise Roadmap",
            description: `Stay ahead with insights into advanced features, security enhancements, and upcoming tools designed for large organizations. `,
            link: {
              text: "See the Roadmap",
              url: "https://vercel.com/docs/accounts/plans/enterprise",
            },
          },
        ],
      },
      {
        sectionTitle: "Next Steps",
        paragraphs: [
          <span>
            I’ve also included a{" "}
            <a
              href="https://www.youtube.com/watch?v=t-qs3FFTHJ4"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              quick video
            </a>{" "}
            highlighting our infrastructure capabilities, which may align with
            your priorities. If you’d like to discuss how Vercel can support
            your specific goals or have questions about getting started, let’s
            set up a quick call—I’d be happy to assist. Just let me know what
            works best for you!
          </span>,
        ],
      },
      {
        paragraphs: [
          "Looking forward to partnering with you to achieve your goals!",
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
      {/* Question Layout */}
      <QuestionLayout
        title="Question 7"
        questionContent={[
          "What resources would you want to prepare to make sure that the CISO of a newly signed Enterprise customer has everything they need to succeed as they migrate to the Enterprise version of the platform? Feel free to use documentation from vercel.com, and our YouTube channel to find assets to help.",
        ]}
        subParts={[
          "Your customer is Ty, a CISO for a Fortune 500 firm that just signed on for Enterprise with Vercel Secure Compute. They would like to discuss the security products Vercel offers as well as Enterprise offering and roadmap.",
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

          {/* Answer Sections */}
          {answer.content.map((section, index) => {
            if (section.orderedList) {
              return (
                <div key={index} className={styles.answerSection}>
                  <h3 className={styles.contentTitle}>
                    {section.sectionTitle}
                  </h3>
                  <ol className={styles.orderedList}>
                    {section.orderedList.map((item, idx) => (
                      <li key={idx} className={styles.listItem}>
                        <p className={styles.answerParagraph}>
                          <strong>{item.title}:</strong> {item.description}
                          <a
                            href={item.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                          >
                            {item.link.text}
                          </a>
                        </p>
                      </li>
                    ))}
                  </ol>
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
      <footer>
        <Navigation />
      </footer>
    </div>
  );
}
