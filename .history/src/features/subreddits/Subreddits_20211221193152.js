import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card/Card';
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice';
import './Subreddits.css';
import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from '../../store/redditSlice';


const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  const main = document.getElementById('main');
  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);


  return (
    <div id="main">
      <Card className="subreddit-card">
        <h2>Subreddits</h2>
        <ul className="subreddits-list">
          {subreddits.map((subreddit) => (
            <li
              onClick={() => {
                dispatch(fetchSubreddits());
                if (main.style.display !== null) {
                  if (main.style.display === 'block') {
                    main.style.display = 'none'
                  }
                }
              }}

              key={subreddit.id}
              className={`${selectedSubreddit === subreddit.url && `selected-subreddit`
                }`}
            >
              <button
                type="button"
                onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
              >
                <img
                  src={
                    subreddit.icon_img ||
                    `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                  }
                  alt={`${subreddit.display_name}`}
                  className="subreddit-icon"
                  style={{ border: `3px solid ${subreddit.primary_color}` }}
                />
                {subreddit.display_name}
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default Subreddits;


