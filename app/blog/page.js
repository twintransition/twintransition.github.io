import { getSortedPostsData } from '../../lib/posts';

export default async function Home() {
  const allPostsData = await getData();
  return (
    <div>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
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
