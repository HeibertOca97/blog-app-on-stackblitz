import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const params = useParams();
  return (
    <>
      <h1>Post: {params.post_id}</h1>
    </>
  );
}
