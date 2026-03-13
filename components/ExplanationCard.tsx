import ReactMarkdown from "react-markdown";

export default function ExplanationCard({ text }: { text: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6 border border-gray-100">
      <h2 className="text-lg font-semibold text-indigo-600 mb-3">
        📖 Explanation
      </h2>
      <div className="prose prose-sm max-w-none text-gray-700">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(text)}
        className="mt-4 text-xs text-gray-400 hover:text-indigo-500"
      >
        📋 Copy
      </button>
    </div>
  );
}