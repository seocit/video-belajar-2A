import React from 'react';
import { videos as defaultVideos, catalogImages, profileImages, Video } from '../api/data';
import ratingStar from '../assets/images/rating.svg';

export interface ItemCardProps {
    videoList?: Video[];
    onEdit?: (index: number) => void;
    onDelete?: (index: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ videoList, onEdit, onDelete }) => {
    const displayVideos = videoList ?? defaultVideos;

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {displayVideos.map((video: Video, index: number) => (
                <div
                    key={`${video.title}-${index}`}
                    className="flex flex-col justify-between gap-3 p-4 bg-white border border-gray-400/40 rounded-2xl hover:shadow-xl transition-all"
                >

                    <div className="flex flex-col gap-3">
                        <img
                            className="w-full h-44 rounded-xl object-cover sm:h-52"
                            src={catalogImages[index % catalogImages.length]}
                            alt={video.title}
                        />

                        <h3 className="text-sm font-semibold font-poppins sm:text-base">
                            {video.title}
                        </h3>

                        <p className="hidden sm:block text-sm text-gray-500 line-clamp-2">
                            {video.description}
                        </p>

                        <div className="flex items-center gap-2">
                            <img
                                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                                src={profileImages[index % profileImages.length]}
                                alt={video.mentor.name}
                            />
                            <div className="min-w-0">
                                <p className="text-xs font-semibold truncate">{video.mentor.name}</p>
                                <p className="text-xs text-gray-500 truncate">{video.mentor.job}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
                            <img src={ratingStar} alt="rating" className="w-4 h-4" />
                            <span className="underline">{video.rating} ({video.viewer})</span>
                        </span>
                        <p className="text-primary text-lg font-bold sm:text-xl">
                            Rp {video.price}K
                        </p>
                    </div>

                    {(onEdit || onDelete) && (
                        <div className="flex gap-2 justify-end pt-2 border-t border-gray-100">
                            {onEdit && (
                                <button
                                    type="button"
                                    onClick={() => onEdit(index)}
                                    className="flex-1 py-1.5 text-xs font-semibold border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors sm:flex-none sm:px-4"
                                >
                                    Edit
                                </button>
                            )}
                            {onDelete && (
                                <button
                                    type="button"
                                    onClick={() => onDelete(index)}
                                    className="flex-1 py-1.5 text-xs font-semibold border border-red-500 text-red-600 rounded-lg hover:bg-red-50 transition-colors sm:flex-none sm:px-4"
                                >
                                    Hapus
                                </button>
                            )}
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
};

export default ItemCard;
