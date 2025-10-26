import React from 'react';

export async function getServerSideProps() {
  const articles = [
    { id: 1, title: "Next.js 15 Released!", date: "2025-10-25" },
    { id: 2, title: "React 19 Features You Should Know", date: "2025-10-20" },
    { id: 3, title: "SSR vs SSG Explained", date: "2025-10-18" },
  ];

  return { props: { articles } };
}

export default function News({ articles }) {
  return (
    <div className="news-container">
      <h1 className="news-title">Server-Side Rendered News</h1>
      <ul className="news-list">
        {articles.map((a) => (
          <li key={a.id} className="news-item">
            <strong>{a.title}</strong> — <em>{a.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
