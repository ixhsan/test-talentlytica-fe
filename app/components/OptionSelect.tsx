"use client";

import { useState } from "react";

interface OptionSelectProps {
  index: number;
  scale: number;
  selectNilai: () => void;
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  index,
  scale,
  selectNilai,
}) => {
  const [nilai, setNilai] = useState(0);
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNilai(value);
  };

  return (
    <select
      name={`aspek-${index + 1}`}
      id={`aspek-${index + 1}`}
      className="bg-white"
      value={nilai}
      onSelect={(e) => handleSelect(e)}
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
