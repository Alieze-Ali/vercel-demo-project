// File: components/QuestionsLayout.jsx
export default function QuestionLayout({ title, questionContent, subParts }) {
    return (
      <div className="centered-page">
        <h1>{title}</h1>
        {questionContent.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {subParts && subParts.length > 0 && (
          <ol>
            {subParts.map((part, index) => (
              <li key={index}>
                <strong>{String.fromCharCode(97 + index)}.</strong> {part}
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  }
  
  