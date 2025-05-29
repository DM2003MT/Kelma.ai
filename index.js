
import React from "react";

export default function KelmaAI() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Kelma.ai</h1>
        <p className="text-xl text-gray-600">
          Learn Maltese Smarter — With AI 🇲🇹
        </p>
      </header>

      <section className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-lg">
          Kelma.ai is Malta’s first AI tutor for learning, writing, and speaking better Maltese — perfect for expats, students, and locals.
        </p>
      </section>

      <section className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
        <div className="bg-gray-50 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">✍️ Grammar & Spelling</h2>
          <p>Corrects mistakes and explains why they're wrong.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">🔄 English-Maltese Translation</h2>
          <p>Helps translate with proper grammar and context.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">💬 Conversation Practice</h2>
          <p>Practice real Maltese conversations with AI.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">📚 Vocabulary Builder</h2>
          <p>Teaches new words with examples and usage tips.</p>
        </div>
      </section>

      <div className="text-center mb-16">
        <a
          href="#"
          className="inline-block bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow"
        >
          🚀 Try Kelma.ai Now
        </a>
      </div>

      <footer className="text-center text-sm text-gray-500">
        <p>Made with 🇲🇹 by a local entrepreneur</p>
        <p>Powered by OpenAI</p>
      </footer>
    </div>
  );
}
