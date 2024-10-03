import { Link, type Page, useSSQ } from "rakkasjs";

const Home: Page = () => {
  const { data } = useSSQ(async ({ fetch }) => {
    const resp = await fetch("https://example.com");
    return { content: resp.statusText };
  });
  return (
    <div>
      <h1>Home</h1>
      <p>Fetched status: {data.content}</p>
      <Link href="/load">go to /load</Link>
    </div>
  );
};

export default Home;
