// Import the reusable QuestionLayout component
import QuestionLayout from "../components/QuestionsLayout";

export default function Question7() {
  return (
    // Render the QuestionLayout component for Question 7
    <QuestionLayout
      // Title for the question
      title="Question 7"
      // Single paragraph describing the question content
      questionContent={[
        "What resources would you want to prepare to make sure that the CISO of a newly signed Enterprise customer has everything they need to succeed as they migrate to the Enterprise version of the platform? Feel free to use documentation from vercel.com, and our YouTube channel to find assets to help.",
      ]}
      // Updated sub-parts for the question
      subParts={[
        "Your customer is Ty, a CISO for a Fortune 500 firm that just signed on for Enterprise with Vercel Secure Compute. They would like to discuss the security products Vercel offers as well as Enterprise offering and roadmap.",
      ]}
    />
  );
}

