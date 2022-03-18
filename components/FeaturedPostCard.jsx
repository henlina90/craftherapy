import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-60">
    <div
      className="bg-gradient-to-r from-neutral-300 to-neutral-300 absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-60"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="bg-gradient-to-r from-neutral-300 to-neutral-300 absolute rounded-lg  opacity-75  w-full h-60" />
    <div className=" flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <div className="inline-items flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="25px"
          width="25px"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />

        <p className="align-center inline align-middle ml-2 mb-2">
          {post.author.name}
        </p>
      </div>
      {/* <p className="font-light text-neutral-500 text-sm mb-1">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p> */}

      <p className=" mb-1 font-semibold text-xl text-center">{post.title}</p>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
