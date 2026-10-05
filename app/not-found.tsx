import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
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
          color: "#ffd348",
          marginBottom: "12px",
          textTransform: "uppercase",
        }}
      >
        404 — Page Not Found
      </span>
      <h1
        style={{
          fontSize: " clamp(32px, 5vw, 54px)",
          letterSpacing: "-1.5px",
          margin: "0 0 16px",
          fontWeight: 600,
        }}
      >
        Lost Above the Clouds
      </h1>
      <p
        style={{
          maxWidth: "480px",
          color: "#888",
          fontSize: "13px",
          lineHeight: 1.6,
          margin: "0 0 32px",
        }}
      >
        The page you are looking for has vanished into the Bromo mist or never existed. Let&apos;s
        get you back on the right path.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "11px 24px",
          borderRadius: "999px",
          background: "#ffffff",
          color: "#131313",
          fontSize: "11px",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        <ArrowLeft size={14} /> Back to Exploration
      </Link>
    </div>
  );
}
