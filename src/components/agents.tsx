"use client";

import agentSummary from "@/lib/data/agentsData";
import { BeakerIcon } from "@heroicons/react/24/solid";

export default function Agents() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Riepilogo Agenti</h1>
      <div className="space-y-4">
        {agentSummary.map((agent, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-9"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="text-xl font-semibold mb-2">{agent.name}</h2>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Vendite Totali:</strong> {agent.totalSales}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Regioni Coperte:</strong> {agent.regions.join(", ")}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Totale Venduto:</strong> €{" "}
              {agent.totalAmount.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Numero Clienti:</strong> {agent.totalClients}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Cliente con Maggior Vendite:</strong>{" "}
              {agent.topClient.product} (€{" "}
              {agent.topClient.amount.toLocaleString()})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
