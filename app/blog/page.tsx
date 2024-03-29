import { getSortedPostsData } from '@/lib/posts';
import React from 'react';

export default async function Home() {
  const allPostsData = await getData();
  return (
    <div>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

async function getData() {
  const allPostsData = getSortedPostsData();
  return allPostsData
}
