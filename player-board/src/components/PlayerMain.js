export default function PlayerMain() {
  return (
    <div className="bg-primary container">
      <AddPlayer test={test} />
      <table className="table-primary">
        <thead>
          <tr className="">
            <th>total players:</th>
            <th className="btn btn-warning">by Name</th>
            <th className="btn btn-danger">by Score</th>
          </tr>
          <Players />
        </thead>
      </table>
    </div>
  );
}
