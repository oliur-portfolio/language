import Image from "next/image";
import React from "react";

const Blog = ({ blog }) => {
    return (
        <div className="text-center">
            <div className="w-full h-[300px] relative">
                <Image
                    src={blog.image}
                    className="w-full h-full object-contain"
                    sizes="100vw"
                    fill
                />
            </div>

            <h2 className="text-3xl font-semibold mb-4 mt-4">{blog.title}</h2>
            <p className="text-lg font-medium">{blog.description}</p>
        </div>
    );
};

export default Blog;
