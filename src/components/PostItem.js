import Button from "./UI/button/Button";
import "./styles/style.css";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.number}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => props.remove(props.post)}>
          удалить пост
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
