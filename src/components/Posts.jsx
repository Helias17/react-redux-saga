import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  console.log("syncPosts:", syncPosts);

  return syncPosts.length ? (
    syncPosts.map((postItem, index) => (
      <Post key={postItem.id} post={postItem} />
    ))
  ) : (
    <p className="text-center">No posts yet</p>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
