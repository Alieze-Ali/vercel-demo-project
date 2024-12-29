// Import the reusable QuestionLayout component
import QuestionLayout from "../components/QuestionsLayout";

export default function Question6() {
  return (
    // Render the QuestionLayout component for Question 6
    <QuestionLayout
      // Title for the question
      title="Question 6"
      // Single paragraph describing the question content
      questionContent={[
        "An Enterprise customer, new to Next.js and Vercel, asks about a high usage bill regarding fast origin transfer and fast data transfer. They have two questions:",
      ]}
      // Updated sub-parts for the question
      subParts={[
        "Why didnʼt my MIUs cover this bill? I didnʼt use all my MIUs last month…so why didnʼt those roll over?",
        "What would be the best way to help mitigate this so we donʼt see these overage bills in the future?",
        "Feel free to use AI to help supplement your answer, but only use AI to help guide your answer and put it into your own words. Help the customer by providing Vercel or Next.js resources if necessary.",
        "Your Enterprise customer is an SMB customer, under 50 employees, with an ARR of $18,500. Their last overage bill was $1,800 and consisted primarily of fast data transfer and function duration.",
        "MIU == Managed Infrastructure Unit and is a monthly entitlement for usage purchased by a customer that does not roll over every month.",
      ]}
    />
  );
}
