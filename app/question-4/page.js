// Import the reusable QuestionLayout component
import QuestionLayout from "../components/QuestionsLayout";

export default function Question4() {
  return (
    // Render the QuestionLayout component for Question 4
    <QuestionLayout
      // Title for the question
      title="Question 4"
      // Single paragraph describing the question content
      questionContent={[
        "An Enterprise customer who has been sold Vercel through a reseller called Sitecore has reached out to the team to ask about the product. Can you give a brief 2–5 sentence introduction to Vercel to showcase what Vercel does?",
      ]}
      // Updated sub-parts for the question
      subParts={[
        "Your new Enterprise customer is Acme Universityʼs Marketing Department and their lead point person is called Clara (she/her). They have no web development background and donʼt know what Vercel is.",
      ]}
    />
  );
}
