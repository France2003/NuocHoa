import React, { useState, useEffect } from 'react';

interface Comment {
    id: number;
    content: string;
}

const comments: Comment[] = [
    { id: 1, content: "Bình luận 1" },
    { id: 2, content: "Bình luận 2" },
    { id: 3, content: "Bình luận 3" },
    { id: 4, content: "Bình luận 4" },
];

const CommentCarousel: React.FC = () => {
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCommentIndex(prevIndex =>
                prevIndex === comments.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Danh sách bình luận tự động nhảy sau mỗi 2 giây</h2>
            <div className="bg-white p-4 border border-gray-300 rounded">
                <p>{comments[currentCommentIndex].content}</p>
            </div>
        </div>
    );
};

export default CommentCarousel;
