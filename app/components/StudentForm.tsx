"use client";

import React from "react";
import OptionSelect from "./OptionSelect";

interface Nilai {
  scale: number;
}

interface StudentFormProps {
  mahasiswa: string[];
  aspekPenilaian: Nilai[];
}

const StudentForm: React.FC<StudentFormProps> = ({
  mahasiswa,
  aspekPenilaian,
}) => {
  return (
    <table className="table-auto border border-separate my-5 self-center">
      <thead>
        <tr className="items-center justify-center">
          {mahasiswa.length && "Nama Mahasiswa"}
          {aspekPenilaian.length &&
            aspekPenilaian.map((item, index) => (
              <th key={index}>{`Aspek Penilaian ${index + 1}`}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {mahasiswa.length &&
          mahasiswa.map((mahasiswa, nomor) => (
            <tr key={nomor}>
              <td className="text-center border">
                <input
                  type="text"
                  name={mahasiswa}
                  value={mahasiswa}
                  readOnly
                />
              </td>
              {aspekPenilaian.length &&
                aspekPenilaian.map((nilai, index) => (
                  <td className="text-center border" key={index}>
                    <OptionSelect index={index} scale={nilai.scale} indexMahasiswa={nomor + 1}/>
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default StudentForm;
