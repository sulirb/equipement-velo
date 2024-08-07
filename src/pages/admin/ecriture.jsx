import { useCookies } from "react-cookie";
// import MyEditor from "../../components/editor";
import { useNavigate } from "react-router-dom";
import Tiptap from "../../components/tiptap";

function Article() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const navigate = useNavigate();

  return (
    <div>
      {token ? (
        <Tiptap />
      ) : (
        setTimeout(() => {
          navigate("/404");
        })
      )}
    </div>
  );
}

export default Article;
