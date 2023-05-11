"use client";

import { useState } from "react";

interface OptionSelectProps {
  index: number;
  scale: number;
  indexMahasiswa: number;
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  index,
  scale,
  indexMahasiswa,
}) => {
  return (
    <select
      name={`aspek_penilaian_${index + 1}-mahasiswa_${indexMahasiswa}`}
      id={`aspek_penilaian_${index + 1}-mahasiswa_${indexMahasiswa}`}
      className="bg-white"
      defaultValue={0}
    >
      {Array.from({ length: scale }, (_, i) => (
        <option key={`option-${i + 1}`} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
  );
};

export default OptionSelect;
