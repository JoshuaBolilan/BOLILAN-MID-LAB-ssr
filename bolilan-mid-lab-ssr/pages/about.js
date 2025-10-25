// pages/about.js
import React from 'react';

export async function getStaticProps() {
  const team = [
    { name: "Joshua Bolilan", role: "Developer" },
    { name: "Jane Cruz", role: "Designer" },
    { name: "Mark Reyes", role: "Project Manager" },
  ];

  return { props: { team, generatedAt: new Date().toISOString() } };
}

export default function About({ team, generatedAt }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About </h1>
      <p>Page generated at: {generatedAt}</p>
      <ul>
        {team.map((member, i) => (
          <li key={i}>
            {member.name} — {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
