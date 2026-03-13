"use client";

import { useState } from "react";

export default function TopicInput({ onSubmit }: any) {
  const [topic, setTopic] = useState("");

  return (
    <div className="inputBox">
      <label>ENTER A STUDY TOPIC</label>

      <input
        type="text"
        placeholder="e.g. Photosynthesis, Newton's Laws, Binary Search..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={() => onSubmit(topic)}
      >
        ✦ EXPLAIN TOPIC
      </button>
    </div>
  );
}