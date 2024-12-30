// File: components/QuestionsLayout.jsx
// This is a reusable functional component called QuestionLayout
// It takes in three props: title, questionContent, and subParts
export default function QuestionLayout({ title, questionContent, subParts, children }) {
  return (
    // Main container for the question layout
    // The "centered-page" class ensures the content is centered and styled consistently
    <div className="centered-page">
      
      {/* Render the title of the question */}
      <h1>{title}</h1>
      
      {/* Render each paragraph of questionContent */}
      {/* questionContent is an array of strings, and we map over it to create a <p> for each paragraph */}
      {questionContent.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}
      
      {/* Conditionally render the ordered list of subParts if they exist */}
      {/* subParts is optional, so we check if it exists and has items (length > 0) */}
      {subParts && subParts.length > 0 && (
        <ol>
          {/* Map over the subParts array to render each sub-part as a list item */}
          {/* The String.fromCharCode(97 + index) generates alphabetical labels (a., b., c., etc.) */}
          {subParts.map((part, index) => (
            <li key={index}>
              <strong>{String.fromCharCode(97 + index)}.</strong> {part}
            </li>
          ))}
        </ol>
      )}
      {/* Render the children (AnswerSection) */}
      {children}
    </div>
  );
}
  