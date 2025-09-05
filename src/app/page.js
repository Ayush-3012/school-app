export const dynamic = "force-dynamic"; 
export const runtime = "nodejs";

import SchoolSingleCard from "../components/SchoolSingleCard";
import { getSchool } from "../lib/server/services/getSchool";

export default async function Home() {
  const allSchools = await getSchool();

  return (
    <main className="min-h-screen bg-gradient-to-tl from-sky-200 via-purple-300 to-indigo-400 pt-6 pb-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 underline">
          🏫 All Schools
        </h1>
        <p className="text-gray-800 mt-2">
          Browse through the list of registered schools
        </p>
      </div>

      {/* Schools Grid */}
      <div className="container mx-auto px-6">
        {allSchools?.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allSchools.map((school) => (
              <SchoolSingleCard key={school?.id} school={school} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10">
            No schools found. 🚫
          </div>
        )}
      </div>
    </main>
  );
}
