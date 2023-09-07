export const jsonplaceholder = 'https://jsonplaceholder.typicode.com';

async function getAll() {
  try {
    const response = await fetch(`${jsonplaceholder}/posts`);
    return await response.json();
  } catch {
    throw new Error('Occured a wrong with the request');
  }
}

async function getMapPost() {
  const thumbnails = [
    'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-2935d0a3e332decb8e727fe56789b6ab',
    'https://www.gamerfocus.co/wp-content/uploads/2020/09/Genshin-Impact.jpg',
    'https://wallpapercrafter.com/th8001/644933-Call-of-Duty-Modern-Warfare-army-video-game-characters.jpg',
    'https://wallpapers.com/images/hd/call-of-duty-ghost-characters-c33syrbwesw3da92.jpg',
    'https://cdn.sportslumo.com/wp-content/uploads/2022/09/30212022/Untitled-design-62.jpg',
  ];

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const posts = await getAll();

  return posts.map((post) => ({
    ...post,
    picture: thumbnails[getRandomInt(thumbnails.length)],
    createdAt: new Date(),
  }));
}

export const getPost = async () => {
  try {
    if (!window.localStorage.getItem('posts')) {
      window.localStorage.setItem('posts', JSON.stringify(await getMapPost()));
    }
    const posts = JSON.parse(window.localStorage.getItem('posts'));
    console.log(posts[0]);
    return posts;
  } catch (error) {
    return error;
  }
};
