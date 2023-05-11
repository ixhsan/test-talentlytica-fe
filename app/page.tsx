"use client";
import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import GenerateData from "./components/GenerateData";

interface dataInterface {
  [key: string]: FormDataEntryValue;
}

interface nilaiMahasiswa {
  [key: string]: FormDataEntryValue;
}
interface resultInterface {
  [key: string]: nilaiMahasiswa;
}

export default function Home() {
  const [numOfStudents, setNumOfStudents] = useState(1);
  const [numOfAspects, setNumOfAspects] = useState(1);
  const [mahasiswa, setMahasiswa] = useState(["mahasiswa_1"]);
  const [aspekPenilaian, setAspekPenilaian] = useState([
    {
      scale: 10,
    },
  ]);

  const selectNilai = () => {};

  useEffect(() => {
    if (numOfAspects > aspekPenilaian.length) {
      setAspekPenilaian((prevState) => [...prevState, { scale: 10 }]);
    } else if (numOfAspects < aspekPenilaian.length) {
      setAspekPenilaian((prevState) => [...prevState.slice(0, numOfAspects)]);
    }
  }, [numOfAspects, aspekPenilaian]);

  useEffect(() => {
    if (numOfStudents > mahasiswa.length) {
      setMahasiswa((prevState) => [
        ...prevState,
        `mahasiswa_${mahasiswa.length + 1}`,
      ]);
    } else if (numOfStudents < mahasiswa.length) {
      setMahasiswa((prevState) => [...prevState.slice(0, numOfStudents)]);
    }
  }, [numOfStudents, mahasiswa]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: dataInterface = {};
    const result: resultInterface = {};

    for (const [name, value] of formData.entries()) {
      data[name] = value;
    }

    for (const key in data) {
      const [aspect, student] = key.split("-");
      if (aspect.includes("aspek_penilaian")) {
        result[aspect] = result[aspect] || {};
        result[aspect][student] = data[key];
      }
    }

    const resultJSON = JSON.stringify(result);
    const blob = new Blob([resultJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Open the JSON in a new window
    window.open(url, "_blank");
  };

  const increaseNumberofStudent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumOfStudents(Number(event.target.value));
  };
  const increaseNumberofAspects = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumOfAspects(Number(event.target.value));
  };

  return (
    <main>
      <div className="flex flex-col mt-20 w-full">
        <GenerateData
          increaseNumOfStudents={increaseNumberofStudent}
          numOfStudents={numOfStudents}
          increaseNumOfAspects={increaseNumberofAspects}
          numOfAspects={numOfAspects}
        />
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="w-3/4 justify-center flex">
            <StudentForm
              mahasiswa={mahasiswa}
              aspekPenilaian={aspekPenilaian}
            />
          </div>
          <div className="w-1/2">
            <div className="flex flex-row justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
