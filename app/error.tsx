"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected runtime error
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
        textAlign: "center",
        background: "#171414",
        color: "#ffffff",
      }}
    >
      <span
        style={{
          fontSize: "12px",
          letterSpacing: "2px",
          color: "#ff6b6b",
          marginBottom: "12px",
          textTransform: "uppercase",
        }}
      >
        Something went wrong
      </span>
      <h2
        style={{
          fontSize: "32px",
          letterSpacing: "-1px",
          margin: "0 0 16px",
          fontWeight: 600,
        }}
      >
        An unexpected error occurred
      </h2>
      <p
        style={{
          maxWidth: "460px",
          color: "#888",
          fontSize: "12px",
          lineHeight: 1.6,
          margin: "0 0 28px",
        }}
      >
        {error.message || "We encountered an issue rendering this section. Please try again."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 22px",
          borderRadius: "999px",
          background: "#ffffff",
          color: "#131313",
          fontSize: "11px",
          fontWeight: 700,
          border: 0,
          cursor: "pointer",
        }}
      >
        <RotateCcw size={13} /> Try Again
      </button>
    </div>
  );
}
