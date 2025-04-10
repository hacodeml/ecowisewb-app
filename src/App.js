export default function App() {
  return (
    <div className="bg-blue-700 min-h-screen text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-8">Dashboard EcoWise Web</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow">Energía Generada: 5.6 kWh</div>
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow">Consumo: 3.2 kWh</div>
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow">Ahorro CO₂: 19.2 kg</div>
      </div>
    </div>
  );
}
