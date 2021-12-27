export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};

fetch('https://www.reddit.com', {
  method: 'GET',
  body: JSON.stringify(data),
  credentials: "same-origin", //include, same-origin
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then((data) => data.json())
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err))