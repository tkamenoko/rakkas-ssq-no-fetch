import { Link, type Page, useSSQ } from "rakkasjs";

const Load: Page = () => {
  const { data } = useSSQ(async ({ fetch }) => {
    const resp = await fetch("https://example.com");
    return { content: resp.statusText };
  });
  return (
    <div>
      <h1>Load</h1>
      <p>Fetched status: {data.content}</p>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default Load;
