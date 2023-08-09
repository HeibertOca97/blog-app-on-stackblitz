import React, { useEffect, useContext } from 'react';
import { PostContext } from '../hooks/PostSearchProvider';

export default function Home() {
  const { found_post, posts, getAll } = useContext(PostContext);

  const showData = () => {
    if (found_post == null) {
      return posts.map((post) => <p key={post.id}>{post.title}</p>);
    }

    if (found_post.length == 0) {
      return <p>Resources no found</p>;
    }
    return found_post.map((post) => <p key={post.id}>{post.title}</p>);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {showData()}
    </div>
  );
}
