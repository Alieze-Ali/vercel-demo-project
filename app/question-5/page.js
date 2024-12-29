// Import the reusable QuestionLayout component
import QuestionLayout from "../components/QuestionsLayout";

export default function Question5() {
  return (
    // Render the QuestionLayout component for Question 5
    <QuestionLayout
      // Title for the question
      title="Question 5"
      // Two paragraphs describing the question content
      questionContent={[
        "A Pro customer who typically spends $900 monthly on Vercel has experienced a sudden increase to $2,100 for their next billing period due to increased data transfer costs. Their main website also shows poor Core Web Vitals performance, specifically a failed Largest Contentful Paint score.",
        "Be proactive in reaching out to this customer about their increased usage and costs. Engage them in a conversation that explores the situation and leads to mutually beneficial solutions.",
      ]}
      // Updated sub-parts for the question
      subParts={[
        "Your champion is Travis (he/him) and he is the lead developer for a mobile game company, $14 million in revenue, 100 employees/10 Vercel team members. They are NOT an Enterprise customer yet, but have spent on average $900 in the last three months on Vercel. They are headquartered in Singapore.",
      ]}
    />
  );
}
