import { Link, useParams } from "react-router-dom";
function Post() {
  const params = useParams();
  return (
    <div style={{ padding: 30 }}>
      <h1>ID: {params.id}</h1>
      <h2>Slug: {params.slug}</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Post;
