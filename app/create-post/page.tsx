"use strict";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import From from "@components/Form";
import { PostType } from "@/types/FormTypes";

const CreatePostPage = () => {
  const [submitting, setSubmittings] = useState<Boolean>(false);
  const [post, setPost] = useState<PostType>({ prompt: "", tags: "" });

  const createPost = async () => {};
  return (
    <From
      type="create-post"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};
