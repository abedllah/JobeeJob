import { useState } from 'react';
import { BsThreeDots, BsHeart, BsHeartFill, BsShare, BsChat } from 'react-icons/bs';

export default function PostList({ posts }) {
  const [allPosts, setAllPosts] = useState(posts);

  const toggleLike = (index) => {
    const updated = [...allPosts];
    updated[index].liked = !updated[index].liked;
    setAllPosts(updated);
  };

  const toggleReaction = (postIndex, emojiIndex) => {
    const updated = [...allPosts];
    updated[postIndex].reactionToggled =
      updated[postIndex].reactionToggled === emojiIndex ? null : emojiIndex;
    setAllPosts(updated);
  };

  const [showCommentBoxIndex, setShowCommentBoxIndex] = useState(null);

  return (
    <div className="w-full rounded border-2 border-gray-300">
      {allPosts.map((post, index) => (
        <div key={index}>
          <div className="bg-white p-4 w-full transition-all duration-300">
            {/* Top Bar */}
            <div className="flex justify-between items-start text-sm text-gray-500">
              <p className="text-xs">{post.discoveryNote || 'Discover new communities'}</p>
              <button className="bg-gray-100 px-3 py-1 rounded-md text-xs font-semibold hover:bg-gray-200">
                {post.actionBtn || 'Join Bowl'}
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-center mt-3">
              <img
                src={post.avatar}
                alt="avatar"
                className="w-9 h-9 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">{post.username}</p>
                <p className="text-xs text-gray-500">{post.role}</p>
              </div>
              <span className="ml-auto text-xs text-gray-400">{post.timeAgo}</span>
              <BsThreeDots className="ml-2 text-gray-500 cursor-pointer" />
            </div>

            {/* Content */}
            <div className="mt-3 text-sm text-gray-800">
              {post.content}{' '}
              <span className="text-blue-600 cursor-pointer hover:underline">read more</span>
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center justify-between text-gray-600 text-sm">
              <div className="flex items-center gap-4">
                <button onClick={() => toggleLike(index)}>
                  {post.liked ? (
                    <BsHeartFill className="text-red-500" />
                  ) : (
                    <BsHeart className="hover:text-red-500" />
                  )}
                </button>

                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() =>
                    setShowCommentBoxIndex(showCommentBoxIndex === index ? null : index)
                  }
                >
                  <BsChat />
                  <span>{post.commentsCount} Comments</span>
                </div>

                <BsShare className="cursor-pointer hover:text-blue-500" />
              </div>

              {/* Dynamic Reactions */}
              <div className="flex items-center gap-1 text-green-600">
                {post.reactions.map((emoji, emojiIndex) => (
                  <span
                    key={emojiIndex}
                    onClick={() => toggleReaction(index, emojiIndex)}
                    className={`cursor-pointer transition ${
                      post.reactionToggled === emojiIndex ? 'scale-125' : ''
                    }`}
                  >
                    {emoji}
                  </span>
                ))}
                <span className="text-gray-600 ml-1">{post.reactionCount}</span>
              </div>
            </div>

            {/* Comments Input */}
            {showCommentBoxIndex === index && (
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>
            )}

            {/* Tags */}
            <div className="mt-4 flex gap-3 text-sm">
              <button className="px-3 py-1 rounded-full border text-gray-700 hover:bg-gray-100">
                Interested
              </button>
              <button className="px-3 py-1 rounded-full border text-gray-700 hover:bg-gray-100">
                Not interested
              </button>
            </div>
          </div>

          {/* Divider */}
          {index < posts.length - 1 && (
            <hr className="border-t border-gray-300 my-2" />
          )}
        </div>
      ))}
    </div>
  );
}
