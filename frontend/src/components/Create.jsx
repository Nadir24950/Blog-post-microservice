import { useState } from "react";

const Create = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [title, setTitle] = useState("");
  const history = useHistory();
  return (
    <div className="create">
      <h2>Create a New BLOG</h2>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

export default Create;
