import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return (
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only"></span>
      </div>
    );
  }

  return !posts.length ? (
    <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>
      Load posts
    </button>
  ) : (
    posts.map((postItem) => <Post key={postItem.id} post={postItem} />)
  );
};

export default FetchedPosts;
