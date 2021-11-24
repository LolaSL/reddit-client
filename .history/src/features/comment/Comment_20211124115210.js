import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './Comment.css';
import Avatar from '../avatar/Avatar';
// import { API_ROOT } from '../../api/reddit';
// import { permalink } from 'permalink';


const markdown = `json[1].data.children.map((subreddit) => subreddit.data)`
const Comment = (props) => {
    const { comment } = props;
    return (
        <div className="comment">
            <div className="comment-metadata">
                <Avatar name={comment.author} />
                <p className="comment-author">{comment.author}</p>
                <p className="comment-created-time">
                    {moment.unix(comment.created_utc).fromNow()}
                </p>
            </div>
            <ReactMarkdown source={comment.body} children={markdown} />
        </div>
    );
};

export default Comment;