import Dashboard from '@/components/Dashboard'; // Ensure correct case and path
 // Check if 'dashboard.jsx' exists or should be 'Dashboard.jsx'


export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Dashboard />
    </div>
  );
}