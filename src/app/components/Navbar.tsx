export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 px-8 py-4 text-white shadow-md">

      <h1 className="text-2xl font-bold">
        DSA Visualizer
      </h1>

      <ul className="flex gap-6 font-medium">
        <li className="cursor-pointer hover:text-gray-200">Home</li>
        <li className="cursor-pointer hover:text-gray-200">Data Structures</li>
        <li className="cursor-pointer hover:text-gray-200">Algorithms</li>
        <li className="cursor-pointer hover:text-gray-200">About</li>
      </ul>

    </nav>
  );
}