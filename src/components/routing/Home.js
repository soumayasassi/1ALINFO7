import { Link } from "react-router-dom";
function Home() {
    const data1 = {
        from: "Link #1",
        message: "Welcome to KindaCode.com",
        timestamp: Date.now(),
      };
      const data2 = {
        from: "Link #2",
        message: "Just another message",
        timestamp: Date.now(),
      };
  return (
    <div style={{ padding: 30 }}>
      <p>
        <Link to={`/post/123/hello-world`}>/post/123/hello-world</Link>
      </p>
      <p>
        <Link to={`/post/456/goodbye-moon`}>/post/345/goodbye-moon</Link>
      </p>
      <p>
        <Link to={`/search`} replace={true}>/search</Link>
      </p>
      <p>
        <Link to="/about" state={data1}>
          Go to About Page (Link #1)
        </Link>
      </p>
      <p>
        <Link to="/about" state={data2}>
          Go to About Page (Link #2)
        </Link>
      </p>
    </div>
  );
}

export default Home;
