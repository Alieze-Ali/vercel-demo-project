// Import the reusable QuestionLayout component
import QuestionLayout from "../components/QuestionsLayout";

export default function Question2() {
  return (
    // Render the QuestionLayout component for Question 1
    <QuestionLayout
      // Title for the question
      title="Question 2"
      // Single paragraph describing the question content
      questionContent={[
        "A customer has reached out asking, when should I choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel? Please reply to the customer.",
      ]}
      // Array of sub-parts for the question
      subParts={[
        "Your Enterprise customer is Trevor (they/them), a frontend developer at a winery using Next.js and Statsig. They are primarily interested in being able to use the Vercel platform with Next.js to do personalization for their online shop based on geolocation (some places donʼt allow for shipping of alcohol via delivery).",
      ]}
    />
  );
}

