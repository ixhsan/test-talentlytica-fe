"use client";
import StudentForm from "./components/StudentForm";

export default function Home() {
  const mahasiswa = ["iwan", "asep", "maman"];
  const aspekPenilaian = [
    {
      scale: 10,
    },
    {
      scale: 10,
    },
    {
      scale: 10,
    },
  ];

  const selectNilai = (nilai) => {
    console.log(nilai);
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center mt-20 w-full">
        <div className="w-3/4 justify-center flex">
          <StudentForm
            mahasiswa={mahasiswa}
            aspekPenilaian={aspekPenilaian}
            selectNilai={selectNilai}
          />
        </div>
        <div className="w-1/2">
          <div className="flex flex-row justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
