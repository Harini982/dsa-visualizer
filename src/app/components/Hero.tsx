import FeatureCard from "./FeatureCard";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-[85vh] flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-white to-indigo-100 px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold text-gray-900">
          Master Data Structures & Algorithms
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-600">
          Learn Data Structures and Algorithms through interactive
          visualizations. Perform operations, understand algorithm flow,
          analyze time complexity, and prepare for coding interviews.
        </p>

        <div className="flex gap-4">
          <button className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
            Start Learning
          </button>

          <button className="rounded-lg border-2 border-blue-600 px-8 py-3 text-blue-600 hover:bg-blue-100">
            Explore Algorithms
          </button>
        </div>
      </section>

      {/* Popular Data Structures */}
      <section className="bg-gray-100 px-8 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Popular Data Structures
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            title="Arrays"
            description="Learn insertion, deletion, searching and traversal."
          />

          <FeatureCard
            title="Linked List"
            description="Understand nodes and pointers visually."
          />

          <FeatureCard
            title="Stack"
            description="Explore push and pop operations."
          />

          <FeatureCard
            title="Queue"
            description="Learn FIFO operations interactively."
          />

          <FeatureCard
            title="Trees"
            description="Visualize hierarchical data structures."
          />

          <FeatureCard
            title="Graphs"
            description="Understand BFS and DFS traversal."
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white px-8 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Why Choose DSA Visualizer?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-8 text-center">
            <h3 className="mb-3 text-2xl font-bold">
              🎯 Interactive Learning
            </h3>
            <p>
              Learn by performing real operations on data structures.
            </p>
          </div>

          <div className="rounded-xl bg-blue-50 p-8 text-center">
            <h3 className="mb-3 text-2xl font-bold">
              ⚡ Real-Time Animation
            </h3>
            <p>
              Watch every algorithm execute step by step.
            </p>
          </div>

          <div className="rounded-xl bg-blue-50 p-8 text-center">
            <h3 className="mb-3 text-2xl font-bold">
              💼 Interview Preparation
            </h3>
            <p>
              Master concepts required for coding interviews.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}