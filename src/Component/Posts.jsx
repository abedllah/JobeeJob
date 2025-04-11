import React from 'react'
import PostList from './PostList';

const posts = [
    {
      discoveryNote: 'Discover new communities',
      actionBtn: 'Join Bowl',
      username: 'The Worklife Bowl',
      role: 'Program Manager',
      avatar: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      timeAgo: '2w',
      content:
        'My manager keeps denying my PTO requests, saying ‘it’s not a good time,’ even though I give plenty of notice and ensure coverage...',
      commentsCount: 319,
      reactions: ['💚', '😂', '😲'],
      reactionCount: 113,
    },
    {
      username: 'TechSpace',
      role: 'Software Engineer',
      avatar: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
      timeAgo: '3d',
      content:
        'Been working remotely for a year now—honestly the best decision for my productivity and mental health.',
      commentsCount: 150,
      reactions: ['🔥', '👍'],
      reactionCount: 76,
    },
  ];

export default function Posts() {
  return (
    <div>
         <PostList posts={posts} />
    </div>
  )
}
