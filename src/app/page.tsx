import Link from "next/link";
import { mockData } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          La tua spesa, semplice e fresca
        </h1>
        <p className="mt-2 text-lg text-gray-500">
          Scegli una categoria per iniziare.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {mockData.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group flex flex-col items-center justify-center gap-4 rounded-xl border bg-white p-6 text-center shadow-sm transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-8 w-8" />
              </div>
              <span className="text-lg font-semibold">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}