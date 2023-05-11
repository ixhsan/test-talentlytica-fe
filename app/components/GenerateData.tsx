interface GenerateDataProps {
  numOfStudents: number;
  numOfAspects: number;
  increaseNumOfStudents: React.ChangeEventHandler<HTMLInputElement>
  increaseNumOfAspects: React.ChangeEventHandler<HTMLInputElement>
}
const GenerateData: React.FC<GenerateDataProps> = ({
  numOfAspects,
  increaseNumOfAspects,
  numOfStudents,
  increaseNumOfStudents,
}) => {
  return (
    <div className="flex flex-col justify- items-center gap-2 py-4">
      <h2 className="font-bold text-lg">GENERATE DATA</h2>
      <div className="flex flex-row space-x-5">
        <label htmlFor="student">Student</label>
        <input
          type="number"
          step={1}
          min={1}
          max={100}
          name="student"
          value={numOfStudents}
          className="text-center"
          onChange={increaseNumOfStudents}
        />
      </div>
      <div className="flex flex-row space-x-5">
        <label htmlFor="aspect">Aspect</label>
        <input
          type="number"
          step={1}
          min={1}
          max={100}
          name="student"
          value={numOfAspects}
          onChange={increaseNumOfAspects}
          className="text-center"
        />
      </div>
    </div>
  );
};

export default GenerateData;
