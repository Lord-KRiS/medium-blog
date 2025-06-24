import React from "react";

function Quote() {
  return (
    <div className="flex flex-col gap-5 justify-center px-20 bg-gray-100">
      <div className="font-bold text-2xl text-left  leading-8">
        "The kind of service I received completyely exceeded my expectations and
        the support staff was extremely helpful and was available as and when I
        needed"
      </div>
      <div>
        <p className="text-xl font-bold">Anne Green</p>
        <p className="text-gray-600">CEO, Pharma World</p>
      </div>
    </div>
  );
}

export default Quote;
