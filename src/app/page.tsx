"use client";

import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(18);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = lowercase + uppercase;

    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;
    if (includeSpecial) chars += symbols;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-md bg-slate-700 rounded-lg shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="mb-6 p-4 bg-slate-600 rounded-lg border-2 border-slate-500">
          <p className="text-gray-300 text-sm mb-2">Generated Password:</p>
          <p className="text-white text-xl font-mono break-all min-h-8">
            {password || "Click generate to create a password"}
          </p>
        </div>

        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className={`w-full py-2 px-4 rounded-lg font-semibold mb-6 transition-colors ${
            copied
              ? "bg-green-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {copied ? "✓ Copied!" : "Copy to Clipboard"}
        </button>

        {/* Password Length */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">
            Password Length: <span className="text-blue-400">{length}</span>
          </label>
          <input
            type="range"
            min="4"
            max="128"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        {/* Checkboxes */}
        <div className="mb-6 space-y-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-4 h-4 rounded cursor-pointer accent-blue-600"
            />
            <span className="ml-3 text-white font-medium">Include Numbers (0-9)</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="w-4 h-4 rounded cursor-pointer accent-blue-600"
            />
            <span className="ml-3 text-white font-medium">Include Symbols (!@#$%...)</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={includeSpecial}
              onChange={(e) => setIncludeSpecial(e.target.checked)}
              className="w-4 h-4 rounded cursor-pointer accent-blue-600"
            />
            <span className="ml-3 text-white font-medium">Include Special Characters</span>
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-lg"
        >
          Generate Password
        </button>
      </div>
    </div>

  );
}
