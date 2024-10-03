'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">FitTrack</h1>
      </div>
      <ul>
        <li className="mb-2">
          <Link href="/dashboard" className={`block p-2 rounded ${pathname === '/dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/exercise-tutorial" className={`block p-2 rounded ${pathname === '/exercise-tutorial' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            Exercise Tutorial
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/my-fitness-plan" className={`block p-2 rounded ${pathname === '/my-fitness-plan' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            My Fitness Plan
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/workout-tracker" className={`block p-2 rounded ${pathname === '/workout-tracker' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            Workout Tracker
          </Link>
        </li>
      </ul>
    </nav>
  );
}