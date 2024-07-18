import React, { useState, useEffect, ReactNode } from 'react';
import { FaStar } from "react-icons/fa";
interface Comment {
    id: number;
    content: string;
    img: string;
    icon?: React.ReactNode;
    name: string;
    titleName: string;
}

const comments: Comment[] = [
    { id: 1, content: 'Thật sự nếu có 10 sao mình cũng sẽ cho shop cả 10 sao, lần đầu mình ưng 1 shop đến như vậy, gói hàng vô cùng cẩn thận xinh xắn, bao bì xịn xò so vs giá thành quá ổn, đc kèm cả quà tặng, đặc biệt mùi nc hoa thơm dịu mình khá thích.', img: 'https://codedeco.art/wp-content/uploads/2023/08/images.jpg ', icon: <FaStar/>, name: 'Ngoc Vu', titleName: 'Facebook 1156' },
    { id: 2, content: 'Hình ảnh và video chỉ mang tính chất nhận xu. Giao hàng nhanh. Đóng gói cẩn thận. Chất lượng sản phẩm chưa dùng nên chưa biết. Shop sale mua được giá hời nên vote 5 sao ạ.Thanks shop', img: ' https://codedeco.art/wp-content/uploads/2023/08/anh-hotboy-viet-nam_085753800-150x150.jpg', icon: <FaStar/>, name: 'duysiteo315', titleName: 'Shopee 6681' },
    { id: 3, content: 'Shop giao hàng nhanh ghê lun á. Mùi thơm lắm nha mọi người. Độ bám mùi khá tốt mình xịt tối qua đến trưa nay vẫn có mùi thoang thoảng. Shop có tặng 1 vial nhỏ mùi thơm xỉu, kiểu sang sang sao ý ?', img: ' https://codedeco.art/wp-content/uploads/2023/08/tong-hop-25-anh-con-gai-de-thuong-cute_1-150x150.jpg', icon: <FaStar/>, name: 'Lan Anh', titleName: 'Shopee 8693' },
    { id: 4, content: 'Nước hoa thơm chính hãng giữ mùi lâu, xịn xò cực, shop tâm lý tặng kèm quà luôn.Mình không biết tặng mùi gì cho mẹ shop tư vấn mẹ mình thích lắm , so với tầm giá rất ổn cho chai nước hoa ntn.Tặng shop 5 sao luôn. Sẽ còn mua tiếp.', img: 'https://codedeco.art/wp-content/uploads/2023/08/Hinh-anh-trai-dep-Viet-Nam-150x150.jpg ', icon: <FaStar/>, name: 'Thanh Huy', titleName: 'Facebook 4622' },
];

const CommentCarousel: React.FC = () => {
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCommentIndex(prevIndex =>
                prevIndex === comments.length - 1 ? 0 : prevIndex + 1
            );
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4 w-[full]">
            <div className="bg-[#FAF9F5] p-[40px] justify-center m-auto w-[1180px] flex items-center gap-8">
                <img width={150} height={150} className='rounded-full' src={comments[currentCommentIndex].img} alt={comments[currentCommentIndex].name} />
                <div>
                    <p className='flex gap-1 text-[#DD3333] mb-3'>{comments[currentCommentIndex].icon}
                        {comments[currentCommentIndex].icon}
                        {comments[currentCommentIndex].icon}
                        {comments[currentCommentIndex].icon}
                        {comments[currentCommentIndex].icon}</p>
                    <i className='text-[19px]'>{comments[currentCommentIndex].content}</i>
                    <div className='flex'>
                        <p>{comments[currentCommentIndex].name}</p>
                        <p>{comments[currentCommentIndex].titleName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentCarousel;
