// pages/about.js
import React from "react";

export async function getStaticProps() {
  const profile = {
    name: "Joshua Bolilan",
    status: "1st Year College Student", 
    course: "BSIT",
    skills: ["Java"],
  };

  return {
    props: { profile, generatedAt: new Date().toISOString() },
  };
}

export default function About({ profile, generatedAt }) {
  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
    background: "#f4f6f8",
    minHeight: "100vh",
  };

  const cardStyle = {
    background: "#1e1e2f",
    color: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    maxWidth: "500px",
    width: "100%",
  };

  const titleStyle = {
    color: "#00bfff",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2rem",
  };

  const labelStyle = {
    color: "#ffbf00",
    fontWeight: "bold",
  };

  const skillsStyle = {
    background: "#2a2a40",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "5px",
  };

  const footerStyle = {
    marginTop: "20px",
    fontSize: "0.85rem",
    color: "#bbbbbb",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>About Me</h1>
        <p><span style={labelStyle}>Name:</span> {profile.name}</p>
        <p><span style={labelStyle}>Status:</span> {profile.status}</p>
        <p><span style={labelStyle}>Course:</span> {profile.course}</p>
        <p><span style={labelStyle}>Skills:</span></p>
        <div style={skillsStyle}>
          {profile.skills.map((skill, i) => (
            <span key={i} style={{ marginRight: "8px" }}>• {skill}</span>
          ))}
        </div>
        <p style={footerStyle}>Page generated at: {generatedAt}</p>
      </div>
    </div>
  );
}
