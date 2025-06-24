function Avatar({ name, size }: { name: string; size: string }) {
  return (
    <div
      className={`${
        size === "S" ? "w-6 h-6" : "w-10 h-10 text-lg"
      }  bg-gray-300 rounded-full flex justify-center items-center`}
    >
      {name[0].toUpperCase()}
    </div>
  );
}

export default Avatar;
