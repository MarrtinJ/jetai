export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">Top 10 Charter Jets</h1>
      <table className="table-auto mt-5 bg-slate-100">
        <tbody>
          <tr>
            <th className="border border-black p-4">Select</th>
            <th className="border border-black p-4">Name</th>
            <th className="border border-black p-4">Wingspan (ft)</th>
            <th className="border border-black p-4">Number of Engines</th>
            <th className="border border-black p-4">Manufacturing Year</th>
          </tr>
        </tbody>

      </table>
    </div>

  );
}

// export async function getServerSideProps() {
//   const jets = prisma.jet.findMany()

//   return {
//     props: { jets }
//   }
// }