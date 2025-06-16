"use client";
import { useState } from "react";
import MapSVG from "@/components/MapSVG";
import Modal from "@/components/Modal";
import mascots from "@/data/mascots.json";

export default function MapPage() {
  const [selectedPref, setSelectedPref] = useState<string | null>(null);
  const filtered = mascots.filter((m) => m.prefecture === selectedPref);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">日本地図から選んでね</h1>
      <MapSVG onClickPref={setSelectedPref} />
      <Modal open={!!selectedPref} onClose={() => setSelectedPref(null)}>
        <div className="grid grid-cols-2 gap-2">
          {filtered.map((m) => (
            <img
              key={m.id}
              src={m.imageUrl}
              alt={m.id}
              className="w-32 h-32 object-contain"
            />
          ))}
        </div>
      </Modal>
    </div>
  );
}
