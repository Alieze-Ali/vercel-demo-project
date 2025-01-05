// Import necessary components and styles
import QuestionLayout from "../components/QuestionsLayout"; // Layout for the question
import SubjectLine from "../components/SubjectLine"; // Component for the subject line
import AnswerSection from "../components/AnswerSection"; // Component for rendering answer sections
import styles from "../components/Answer.module.css"; // Styles for the answer container
import Navigation from "../components/Nav"; // Navigation component

export default function Question1() {
  // Define the question content
  const questionContent = [
    "An Enterprise customer has come to you to ask about the difference between React and Next.js and what the benefits are of using Next.js for her team. Please write a response to the customer.",
  ];

  // Define additional details for the question
  const subParts = [
    "Your customer is Christy (she/her), a project manager for the marketing department of a wearable tech company - in charge of making sure the marketing pages meet their core web vitals, SEO best practices, and conversion rate goals.",
  ];

  // Define the answer content
  const answer = {
    title: "Answer", // Main title of the answer section
    subject: "React vs. Next.js: What Your Marketing Team Needs to Know", // Email subject line
    greeting: "Hi Christy,", // Personalized greeting

    content: [
      // Introduction section
      {
        sectionTitle: null, // No title for the intro section
        paragraphs: [
          "Thanks for reaching out with your question about React and Next.js—this is such an important topic, especially for marketing pages where performance, SEO, and conversions play a critical role.",
        ],
      },

      // Section: React vs. Next.js
      {
        sectionTitle: "React vs. Next.js: What’s the Difference?",
        paragraphs: [
          "Think of React as the foundation—a library that helps build the user interface for your website. It’s great for creating components like buttons, forms, and other visual elements. But React doesn’t handle things like performance optimizations or SEO out of the box—you’d need to add tools and do a lot of manual setup.",
          "That’s where Next.js comes in. Next.js is a framework built on React that makes it easier to create high-performing, SEO-friendly websites. It’s like having a powerful toolkit that takes care of the heavy lifting, so your team can focus on creating impactful marketing content without worrying about all the behind-the-scenes technicalities.",
        ],
      },

      // Section: Why Next.js is a Game-Changer
      {
        sectionTitle: "Why Next.js is a Game-Changer for Your Team",
        paragraphs: [
          "Since you’re focusing on Core Web Vitals, SEO best practices, and conversion rates, Next.js offers built-in features designed specifically for these goals:",
        ],
        unorderedList: [
          "Core Web Vitals: Next.js ensures your pages load quickly and efficiently through automatic optimizations like image compression, lazy loading, and efficient JavaScript handling. With Vercel (the platform where Next.js truly shines), you get tools like Speed Insights to track metrics like loading speed, interactivity, and visual stability—all crucial for a great user experience and better Google rankings.",
          "SEO Best Practices: Next.js makes server-side rendering (SSR) and static site generation (SSG) easy—these are technical ways to ensure your content is visible to search engines and loads quickly for users. With Vercel Analytics, you can see real-time insights into how your pages perform, helping you fine-tune for better SEO.",
          "Conversion Rate Goals: Performance directly impacts conversions—slow pages drive users away. Next.js, combined with Vercel, gives you the tools to keep your site fast and engaging. Features like A/B testing and Edge Middleware help you create personalized experiences for your visitors, which can significantly boost conversions.",
        ],
      },

      // Section: How to Get Started
      {
        sectionTitle: "How to Get Started with Next.js and Vercel",
        paragraphs: [
          "Here’s a quick roadmap your team can follow to hit those marketing goals:",
        ],
        orderedList: [
          "Deploy Your Site on Vercel: This gives you access to automatic optimizations and built-in tools for monitoring performance.",
          "Track Core Web Vitals: Use Vercel’s performance monitoring and analytics to identify bottlenecks and keep your pages running smoothly.",
          "Optimize SEO: Take advantage of server-side rendering and static generation in Next.js to improve page load times and search engine visibility.",
          "Experiment with A/B Testing: Use Vercel’s tools to try different layouts, headlines, or calls-to-action to see what drives the best results.",
          "Leverage Real-Time Analytics: Keep an eye on user behavior, form submissions, and purchase funnels to continuously improve your site’s conversion rates.",
        ],
      },

      // Final paragraph
      {
        paragraphs: [
          "By using Next.js on Vercel, you’ll have a robust foundation that helps you deliver fast, SEO-friendly, and conversion-optimized marketing pages without getting bogged down in technical complexities. Let me know if you’d like a walkthrough or have any questions—I’m here to help!",
        ],
      },
    ],

    signature: {
      name: "Alieze", // Your name
      title: "Vercel Customer Success Manager", // Your title
      email: "alieze@vercel.com", // Your contact information
    },
  };

  return (
    <div>
      {/* Render the question layout */}
      <QuestionLayout
        title="Question 1" // Question title
        questionContent={questionContent} // Main content of the question
        subParts={subParts} // Additional details for the question
      />

      {/* Render the answer section */}
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
          <p>Best,</p>
          <p>{answer.signature.name}</p>
          <p>{answer.signature.title}</p>
          <p>{answer.signature.email}</p>
        </footer>
      </div>

      {/* Render the bottom navigation */}
      <footer>
        <Navigation />
      </footer>
    </div>
  );
}
