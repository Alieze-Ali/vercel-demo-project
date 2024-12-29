// Import the reusable QuestionLayout component
import QuestionLayout from "../components/QuestionsLayout";

export default function Question1() {
  return (
    // Render the QuestionLayout component for Question 1
    <QuestionLayout
      title="Question 1"
      questionContent={[
        "An Enterprise customer has come to you to ask about the difference between React and Next.js and what the benefits are of using Next.js for her team. Please write a response to the customer.",
      ]}
      subParts={[
        "Your customer is Christy (she/her), a project manager for the marketing department of a wearable tech company.",
      ]}
    />
  );
}
