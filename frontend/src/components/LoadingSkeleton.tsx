function LoadingSkeleton() {
  return (
    <div role="status" className="animate-pulse">
      <div className="w-90 md:w-150 lg:w-200 border-b border-gray-300 pb-12 mt-6 cursor-pointer">
        <div className="flex gap-3 items-center mb-3">
          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>{" "}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingSkeleton;
