import type { Question, SubjectId } from "../domain/question";
import type { QuestionRepository } from "./questionRepository";

const QUESTIONS_BY_SUBJECT: Record<SubjectId, Question[]> = {
  "js-fundamentals": [
    {
      id: "js-q1",
      subjectId: "js-fundamentals",
      prompt: "Which value is considered falsy in JavaScript?",
      options: [
        { id: "js-q1-a", text: "\"0\"" },
        { id: "js-q1-b", text: "0" },
        { id: "js-q1-c", text: "[]" },
        { id: "js-q1-d", text: "{}" },
      ],
      correctOptionId: "js-q1-b",
    },
    {
      id: "js-q2",
      subjectId: "js-fundamentals",
      prompt: "What does `Array.prototype.map` return?",
      options: [
        { id: "js-q2-a", text: "A new array" },
        { id: "js-q2-b", text: "The original array" },
        { id: "js-q2-c", text: "A boolean" },
        { id: "js-q2-d", text: "A number" },
      ],
      correctOptionId: "js-q2-a",
    },
    {
      id: "js-q3",
      subjectId: "js-fundamentals",
      prompt: "Which keyword declares a block-scoped variable?",
      options: [
        { id: "js-q3-a", text: "var" },
        { id: "js-q3-b", text: "let" },
        { id: "js-q3-c", text: "function" },
        { id: "js-q3-d", text: "class" },
      ],
      correctOptionId: "js-q3-b",
    },
    {
      id: "js-q4",
      subjectId: "js-fundamentals",
      prompt: "What is the type of `null` (via `typeof null`)?",
      options: [
        { id: "js-q4-a", text: "\"null\"" },
        { id: "js-q4-b", text: "\"object\"" },
        { id: "js-q4-c", text: "\"undefined\"" },
        { id: "js-q4-d", text: "\"number\"" },
      ],
      correctOptionId: "js-q4-b",
    },
    {
      id: "js-q5",
      subjectId: "js-fundamentals",
      prompt: "Which operation creates a shallow copy of an array?",
      options: [
        { id: "js-q5-a", text: "arr.copy()" },
        { id: "js-q5-b", text: "arr.clone()" },
        { id: "js-q5-c", text: "[...arr]" },
        { id: "js-q5-d", text: "arr.deepCopy()" },
      ],
      correctOptionId: "js-q5-c",
    },
    {
      id: "js-q6",
      subjectId: "js-fundamentals",
      prompt: "Which of the following is NOT a primitive type?",
      options: [
        { id: "js-q6-a", text: "string" },
        { id: "js-q6-b", text: "boolean" },
        { id: "js-q6-c", text: "symbol" },
        { id: "js-q6-d", text: "object" },
      ],
      correctOptionId: "js-q6-d",
    },
    {
      id: "js-q7",
      subjectId: "js-fundamentals",
      prompt: "What does `===` compare?",
      options: [
        { id: "js-q7-a", text: "Value only" },
        { id: "js-q7-b", text: "Type only" },
        { id: "js-q7-c", text: "Value and type" },
        { id: "js-q7-d", text: "References only" },
      ],
      correctOptionId: "js-q7-c",
    },
    {
      id: "js-q8",
      subjectId: "js-fundamentals",
      prompt: "Which method converts JSON string to an object?",
      options: [
        { id: "js-q8-a", text: "JSON.stringify" },
        { id: "js-q8-b", text: "JSON.parse" },
        { id: "js-q8-c", text: "Object.fromJSON" },
        { id: "js-q8-d", text: "toObject" },
      ],
      correctOptionId: "js-q8-b",
    },
    {
      id: "js-q9",
      subjectId: "js-fundamentals",
      prompt: "What is the output type of `Boolean(\"\")`?",
      options: [
        { id: "js-q9-a", text: "string" },
        { id: "js-q9-b", text: "boolean" },
        { id: "js-q9-c", text: "undefined" },
        { id: "js-q9-d", text: "object" },
      ],
      correctOptionId: "js-q9-b",
    },
    {
      id: "js-q10",
      subjectId: "js-fundamentals",
      prompt: "Which statement best describes closures?",
      options: [
        { id: "js-q10-a", text: "A function that runs only once" },
        { id: "js-q10-b", text: "A function bundled with its lexical environment" },
        { id: "js-q10-c", text: "A way to freeze objects" },
        { id: "js-q10-d", text: "A syntax for classes" },
      ],
      correctOptionId: "js-q10-b",
    },
  ],

  "react-basics": [
    {
      id: "react-q1",
      subjectId: "react-basics",
      prompt: "What is a React component?",
      options: [
        { id: "react-q1-a", text: "A reusable UI building block" },
        { id: "react-q1-b", text: "A database table" },
        { id: "react-q1-c", text: "A CSS preprocessor" },
        { id: "react-q1-d", text: "A browser API" },
      ],
      correctOptionId: "react-q1-a",
    },
    {
      id: "react-q2",
      subjectId: "react-basics",
      prompt: "Props are primarily used to…",
      options: [
        { id: "react-q2-a", text: "Manage global app routing" },
        { id: "react-q2-b", text: "Pass data into a component" },
        { id: "react-q2-c", text: "Store persistent data in a DB" },
        { id: "react-q2-d", text: "Compile JSX" },
      ],
      correctOptionId: "react-q2-b",
    },
    {
      id: "react-q3",
      subjectId: "react-basics",
      prompt: "Which hook is used for local component state?",
      options: [
        { id: "react-q3-a", text: "useState" },
        { id: "react-q3-b", text: "useRef" },
        { id: "react-q3-c", text: "useMemo" },
        { id: "react-q3-d", text: "useId" },
      ],
      correctOptionId: "react-q3-a",
    },
    {
      id: "react-q4",
      subjectId: "react-basics",
      prompt: "What must list items include when rendering arrays?",
      options: [
        { id: "react-q4-a", text: "A className" },
        { id: "react-q4-b", text: "A key" },
        { id: "react-q4-c", text: "A style prop" },
        { id: "react-q4-d", text: "A ref" },
      ],
      correctOptionId: "react-q4-b",
    },
    {
      id: "react-q5",
      subjectId: "react-basics",
      prompt: "JSX is…",
      options: [
        { id: "react-q5-a", text: "A JSON format" },
        { id: "react-q5-b", text: "A syntax extension that compiles to JS" },
        { id: "react-q5-c", text: "A CSS-in-JS library" },
        { id: "react-q5-d", text: "A browser extension" },
      ],
      correctOptionId: "react-q5-b",
    },
    {
      id: "react-q6",
      subjectId: "react-basics",
      prompt: "Which pattern prevents unnecessary renders for stable values?",
      options: [
        { id: "react-q6-a", text: "Memoization (useMemo/useCallback)" },
        { id: "react-q6-b", text: "Inline object literals" },
        { id: "react-q6-c", text: "Random keys" },
        { id: "react-q6-d", text: "Mutating props" },
      ],
      correctOptionId: "react-q6-a",
    },
    {
      id: "react-q7",
      subjectId: "react-basics",
      prompt: "State updates in React are…",
      options: [
        { id: "react-q7-a", text: "Always synchronous" },
        { id: "react-q7-b", text: "Always asynchronous" },
        { id: "react-q7-c", text: "Scheduled and may be batched" },
        { id: "react-q7-d", text: "Not allowed in events" },
      ],
      correctOptionId: "react-q7-c",
    },
    {
      id: "react-q8",
      subjectId: "react-basics",
      prompt: "Which hook is used for side effects?",
      options: [
        { id: "react-q8-a", text: "useEffect" },
        { id: "react-q8-b", text: "useState" },
        { id: "react-q8-c", text: "useTransition" },
        { id: "react-q8-d", text: "use" },
      ],
      correctOptionId: "react-q8-a",
    },
    {
      id: "react-q9",
      subjectId: "react-basics",
      prompt: "Controlled inputs keep their value in…",
      options: [
        { id: "react-q9-a", text: "Local state" },
        { id: "react-q9-b", text: "CSS variables" },
        { id: "react-q9-c", text: "A router" },
        { id: "react-q9-d", text: "The DOM only" },
      ],
      correctOptionId: "react-q9-a",
    },
    {
      id: "react-q10",
      subjectId: "react-basics",
      prompt: "What does lifting state up mean?",
      options: [
        { id: "react-q10-a", text: "Moving state to a shared ancestor" },
        { id: "react-q10-b", text: "Converting state to props" },
        { id: "react-q10-c", text: "Deleting state and using refs" },
        { id: "react-q10-d", text: "Using a CSS framework" },
      ],
      correctOptionId: "react-q10-a",
    },
  ],

  "web-accessibility": [
    {
      id: "a11y-q1",
      subjectId: "web-accessibility",
      prompt: "What is the main purpose of alternative text for images?",
      options: [
        { id: "a11y-q1-a", text: "Improve CSS layout" },
        { id: "a11y-q1-b", text: "Help screen readers describe images" },
        { id: "a11y-q1-c", text: "Increase image quality" },
        { id: "a11y-q1-d", text: "Enable caching" },
      ],
      correctOptionId: "a11y-q1-b",
    },
    {
      id: "a11y-q2",
      subjectId: "web-accessibility",
      prompt: "Which element best labels a group of related form controls?",
      options: [
        { id: "a11y-q2-a", text: "<fieldset> + <legend>" },
        { id: "a11y-q2-b", text: "<div> + <span>" },
        { id: "a11y-q2-c", text: "<section> + <h2>" },
        { id: "a11y-q2-d", text: "<p> + <strong>" },
      ],
      correctOptionId: "a11y-q2-a",
    },
    {
      id: "a11y-q3",
      subjectId: "web-accessibility",
      prompt: "Keyboard users typically navigate between focusable elements using…",
      options: [
        { id: "a11y-q3-a", text: "Arrow keys only" },
        { id: "a11y-q3-b", text: "Tab / Shift+Tab" },
        { id: "a11y-q3-c", text: "Ctrl+F" },
        { id: "a11y-q3-d", text: "Esc" },
      ],
      correctOptionId: "a11y-q3-b",
    },
    {
      id: "a11y-q4",
      subjectId: "web-accessibility",
      prompt: "What does ARIA stand for?",
      options: [
        { id: "a11y-q4-a", text: "Accessible Rich Internet Applications" },
        { id: "a11y-q4-b", text: "Advanced Responsive Interface Actions" },
        { id: "a11y-q4-c", text: "Automated Rendering In App" },
        { id: "a11y-q4-d", text: "Accessible Reactive Interfaces Always" },
      ],
      correctOptionId: "a11y-q4-a",
    },
    {
      id: "a11y-q5",
      subjectId: "web-accessibility",
      prompt: "Which is a good practice for interactive elements?",
      options: [
        { id: "a11y-q5-a", text: "Use <div> with onClick for everything" },
        { id: "a11y-q5-b", text: "Use semantic elements like <button> for actions" },
        { id: "a11y-q5-c", text: "Remove focus outlines always" },
        { id: "a11y-q5-d", text: "Hide labels to reduce clutter" },
      ],
      correctOptionId: "a11y-q5-b",
    },
    {
      id: "a11y-q6",
      subjectId: "web-accessibility",
      prompt: "What is the purpose of a visible focus indicator?",
      options: [
        { id: "a11y-q6-a", text: "Show where keyboard focus currently is" },
        { id: "a11y-q6-b", text: "Improve page SEO" },
        { id: "a11y-q6-c", text: "Increase animation performance" },
        { id: "a11y-q6-d", text: "Prevent scrolling" },
      ],
      correctOptionId: "a11y-q6-a",
    },
    {
      id: "a11y-q7",
      subjectId: "web-accessibility",
      prompt: "Which attribute connects a <label> to an <input>?",
      options: [
        { id: "a11y-q7-a", text: "data-label" },
        { id: "a11y-q7-b", text: "name" },
        { id: "a11y-q7-c", text: "htmlFor / id" },
        { id: "a11y-q7-d", text: "role" },
      ],
      correctOptionId: "a11y-q7-c",
    },
    {
      id: "a11y-q8",
      subjectId: "web-accessibility",
      prompt: "Which heading order is best practice?",
      options: [
        { id: "a11y-q8-a", text: "Skip from h1 to h4 for style" },
        { id: "a11y-q8-b", text: "Use headings in a logical hierarchy" },
        { id: "a11y-q8-c", text: "Only use h1 everywhere" },
        { id: "a11y-q8-d", text: "Use divs instead of headings" },
      ],
      correctOptionId: "a11y-q8-b",
    },
    {
      id: "a11y-q9",
      subjectId: "web-accessibility",
      prompt: "Color contrast is important because…",
      options: [
        { id: "a11y-q9-a", text: "It reduces bundle size" },
        { id: "a11y-q9-b", text: "It helps text be readable for more users" },
        { id: "a11y-q9-c", text: "It improves API latency" },
        { id: "a11y-q9-d", text: "It prevents XSS" },
      ],
      correctOptionId: "a11y-q9-b",
    },
    {
      id: "a11y-q10",
      subjectId: "web-accessibility",
      prompt: "When should you use ARIA attributes?",
      options: [
        { id: "a11y-q10-a", text: "Always, even if semantics exist" },
        { id: "a11y-q10-b", text: "Only when native HTML can’t express the needed semantics" },
        { id: "a11y-q10-c", text: "Never" },
        { id: "a11y-q10-d", text: "Only for styling" },
      ],
      correctOptionId: "a11y-q10-b",
    },
  ],
};

export function createMockQuestionRepository(): QuestionRepository {
  return {
    async listQuestionsBySubjectId(subjectId) {
      return QUESTIONS_BY_SUBJECT[subjectId] ?? [];
    },
  };
}

