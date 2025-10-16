import { useState, useEffect, useRef } from "react";

export default function Preview() {
  const [mode, setMode] = useState("tako"); // "tako" | "trakteer"
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!containerRef.current.shadowRoot) {
      containerRef.current.attachShadow({ mode: "open" });
    }
    const shadow = containerRef.current.shadowRoot;
    shadow.innerHTML = `
      <style>${mode === "trakteer" ? css : ""}</style>
      ${html}
    `;
  }, [html, css, mode]);

  const resetForm = () => {
    setHtml("");
    setCss("");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Switcher */}
      <div className="flex gap-2">
        <button
          onClick={() => setMode("tako")}
          className={`px-4 py-2 rounded ${mode === "tako" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Tako
        </button>
        <button
          onClick={() => setMode("trakteer")}
          className={`px-4 py-2 rounded ${mode === "trakteer" ? "bg-green-600 text-white" : "bg-gray-200"}`}
        >
          Trakteer
        </button>
      </div>

      <div className="flex gap-4">
        {/* Form input */}
        <div className="flex flex-col gap-2 w-1/2">
          <textarea
            placeholder={`Tulis HTML untuk ${mode}`}
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="border p-2 h-40 resize-none"
          />

          {/* CSS hanya untuk Trakteer */}
          {mode === "trakteer" && (
            <textarea
              placeholder="Tulis CSS di sini"
              value={css}
              onChange={(e) => setCss(e.target.value)}
              className="border p-2 h-40 resize-none"
            />
          )}

          <button
            onClick={resetForm}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>

        {/* Preview */}
        <div className="border w-1/2 h-80 p-2 overflow-auto">
          <div ref={containerRef}></div>
        </div>
      </div>
    </div>
  );
}
