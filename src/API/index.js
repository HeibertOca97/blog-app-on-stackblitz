export const jsonplaceholder = 'https://jsonplaceholder.typicode.com';

export const getPost = async () => {
  try {
    const response = await fetch(`${jsonplaceholder}/posts`);
    return await response.json();
  } catch {
    throw new Error('Occured a wrong with the request');
  }
};
