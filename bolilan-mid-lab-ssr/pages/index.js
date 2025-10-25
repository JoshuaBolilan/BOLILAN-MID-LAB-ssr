import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
         BOLILAN MID LAB SSR
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
        A demo of <strong>Server-Side Rendering (SSR)</strong> and{" "}
        <strong>Static Site Generation (SSG)</strong> using Next.js
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/news">
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "#ffffff",
              color: "#0070f3",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
             View News (SSR)
          </button>
        </Link>

        <Link href="/about">
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "#ffffff",
              color: "#0070f3",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
             About (SSG)
          </button>
        </Link>
      </div>
    </div>
  );
}
