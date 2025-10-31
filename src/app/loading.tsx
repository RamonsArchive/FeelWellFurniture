export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-3xl">F</span>
          </div>
          <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl opacity-75 animate-ping"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-gray-900">
            Loading...
          </h2>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
