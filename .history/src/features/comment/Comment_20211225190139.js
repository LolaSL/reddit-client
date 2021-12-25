import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './Comment.css';
import Avatar from '../avatar/Avatar';
import remarkGfm from 'remark-gfm';



const Comment = (props) => {
    const { comment } = props;
    const markdown = comment.body;
    return (
        <div className="comment" key={comment.id}>
            <div className="comment-metadata">
                <Avatar name={comment.author} />
                <p className="comment-author">{comment.author}</p>
                <p className="comment-created-time">
                    {moment.unix(comment.created_utc).fromNow()}
                </p>
            </div>
            <div id="comment-body">
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
        </div>
    );
};

export default Comment;