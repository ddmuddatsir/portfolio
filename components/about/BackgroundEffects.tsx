export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-indigo-300 opacity-10 blur-2xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-96 md:h-96 bg-purple-300 opacity-5 blur-2xl rounded-full"></div>
      <div className="absolute top-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-blue-300 opacity-10 blur-[150px] md:blur-[250px] rounded-full"></div>
    </div>
  );
}
