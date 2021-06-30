import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchApi() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  let handleClick = () => {
    setIdFromButton(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButton]);
  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Click</button>
      <ul>
        {/* {posts.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))} */}
        {post.title}
      </ul>
    </div>
  );
}

export default FetchApi;
