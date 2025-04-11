import React from 'react'
import PostList from './PostList';

const posts = [
    {
        username: 'The Worklife Bowl',
        role: 'Program Manager',
        timeAgo: '2w',
        avatar: '/path/to/avatar.jpg',
        content: "My manager keeps denying my PTO requests...",
        commentsCount: 319,
        reactions: ['😂', '❤️', '👏'],
        reactionCount: 113,
        liked: false,
        reactionToggled: null, // can be index of emoji
        comments: [],
      },
      {
        username: 'The Worklife Bowl',
        role: 'Program Manager',
        timeAgo: '2w',
        avatar: '/path/to/avatar.jpg',
        content: "My manager keeps denying my PTO requests...",
        commentsCount: 319,
        reactions: ['😂', '❤️', '👏'],
        reactionCount: 113,
        liked: false,
        reactionToggled: null, // can be index of emoji
        comments: [],
      },
      {
        username: 'The Worklife Bowl',
        role: 'Program Manager',
        timeAgo: '2w',
        avatar: '/path/to/avatar.jpg',
        content: "My manager keeps denying my PTO requests...",
        commentsCount: 319,
        reactions: ['😂', '❤️', '👏'],
        reactionCount: 113,
        liked: false,
        reactionToggled: null, // can be index of emoji
        comments: [],
      },
  ];

export default function Posts() {
  return (
    <div>
         <PostList posts={posts} />
    </div>
  )
}
