// Import the reusable QuestionLayout component
import QuestionLayout from "../components/QuestionsLayout";

export default function Question3() {
  return (
    // Render the QuestionLayout component for Question 3
    <QuestionLayout
      // Title for the question
      title="Question 3"
      // Single paragraph describing the question content
      questionContent={[
        "Through use of a monitoring dashboard, you notice that an Enterprise customer has reduced the number of builds and their usage has gone down by about half quarter over quarter. Please write an email to the champion and executive sponsor of the account to re-engage and start to perform some discovery.",
      ]}
      // Updated sub-parts for the question
      subParts={[
        "Your customer is an SMB with yearly revenue about $5.5 million, 20 employees total with one developer. They have a $22K ARR Vercel subscription. The executive sponsor is the VP of marketing and Vercel hosts their marketing pages. They have a reverse proxy in front of Vercel (Cloudflare) and history shows some errors in their builds. The executive sponsorʼs name is Alex (she/her), Engineering Manager. The champion, Tanner– the lead on the project– it is found out, has left the company.",
      ]}
    />
  );
}
