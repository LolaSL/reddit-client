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

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);
  // function openSubreddits() {
  //   document.getElementById("sidebar").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  // }

  // function closeSubreddits() {
  //   document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";

  return (
    <div id="main">
      {/* <div id="sidebar">
          <button class="openButton" onclick={() => openSubreddits()}>☰ Subreddits</button>
        </div> */}

      <Card className="subreddit-card">
        {/* <span className="closebtn" onClick={() => closeSubreddits()}>×</span> */}
        <h2>Subreddits</h2>
        <ul className="subreddits-list">
          {subreddits.map((subreddit) => (
            <li
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


