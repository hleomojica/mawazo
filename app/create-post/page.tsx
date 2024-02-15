"use strict";
import React, { useState } from "react";

const CreatePostPage = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Create Post</h1>
      <p>Create post form here</p>
      {/* <CreatePostForm /> */}
    </div>
  );
};
