type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mb-4 text-5xl">📘</div>

      <h3 className="mb-3 text-2xl font-bold text-blue-700">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>

    </div>
  );
}