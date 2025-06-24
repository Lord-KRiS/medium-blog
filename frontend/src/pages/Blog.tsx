import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CompleteBlog from "../components/CompleteBlog";
import { useBlog } from "../hooks";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CompleteBlog
        title={
          "The one thing that you have been missing which will in your life which will give it a purpose"
        }
        content={
          "In a world that constantly demands us to hustle, achieve, and outperform, many of us wake up each day feeling like we’re just going through the motions. You might go to school, work a job, spend time with friends or scroll endlessly on your phone—but something still feels missing. A strange emptiness, like you’re not truly living, just surviving. It’s easy to blame this feeling on external things: a lack of money, recognition, love, or direction. But what if the one thing you’re missing, the thing that could give your life a true sense of purpose, isn’t outside of you at all? What if it's something deeply internal—a sense of meaning that comes from living intentionally for something greater than yourself? Most of us live reactively. We respond to life rather than create it. We follow what’s expected: go to school, get a job, maybe start a family. While these can be fulfilling paths, they don’t necessarily equal purpose. Purpose is not just about having goals. It’s about understanding why you do what you do. It’s about connecting your actions to a deeper meaning.The one thing many of us are missing is this clarity of purpose—a strong, guiding why behind our everyday lives. This doesn’t mean you have to change the world in a huge way. It means finding something that makes you feel alive, useful, and connected. Purpose isn’t one-size-fits-all. For one person, it could be creating art. For another, it’s raising a child with love. For someone else, it could be starting a business that solves a real problem."
        }
        date="24th febb"
        name="KrrisH"
      />
    </div>
  );
}

export default Blog;
