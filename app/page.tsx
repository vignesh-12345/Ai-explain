"use client";

import { useState } from "react";
import TopicInput from "@/components/TopicInput";
import ExplanationCard from "@/components/ExplanationCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Home() {
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const explainTopic = async (topic: string) => {
    setLoading(true);
    setExplanation("");

    const res = await fetch("/api/explain", {
      method: "POST",
      body: JSON.stringify({ topic }),
    });

    const data = await res.json();

    setExplanation(data.explanation);
    setLoading(false);
  };

  return (
    <main className="container">
      <div className="hero">

        <div className="logo">
          <span className="logoBox">K</span>
          <span className="brand">KALNET</span>
          <span className="aiTag">AI</span>
        </div>

        <p className="tag">AI-POWERED LEARNING</p>

        <h1 className="title">
          Understand <span>anything</span>, instantly.
        </h1>

        <p className="subtitle">
          Enter any study topic and get a clear, student-friendly
          explanation in seconds — powered by Google Gemini AI.
        </p>

        <TopicInput onSubmit={explainTopic} />

        <div className="examples">
          <p>TRY AN EXAMPLE</p>

          <div className="chips">
            {[
              "Photosynthesis",
              "Newton's Laws",
              "Binary Search",
              "World War II",
              "Black Holes",
              "DNA Replication",
              "The French Revolution",
              "Quantum Mechanics",
            ].map((item) => (
              <button
                key={item}
                onClick={() => explainTopic(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {loading && <LoadingSkeleton />}
        {explanation && <ExplanationCard text={explanation} />}
      </div>
    </main>
  );
}