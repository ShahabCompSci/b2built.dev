const stats = [
  { value: "< 24", label: "Hour Onboarding" },
  { value: "100%", label: "Compliance with Global Data Security Standards" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Availability" },
];

export default function StatsBar() {
  return (
    <section className="bg-gray-900 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 text-center text-white sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-extrabold text-brand">{s.value}</div>
            <p className="mt-2 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
