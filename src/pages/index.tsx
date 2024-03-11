import { Jet } from '@prisma/client';
import prisma from './db'
import { useEffect } from 'react';

type Props = {
  jets: Jet[]
}

export default function Home({ jets }: Props) {
  return (
    <div className='ml-5 mt-5'>
      <h1 className="text-2xl">Top 10 Charter Jets</h1>
      <table className="table-auto mt-5 bg-zinc-200 border border-black">
        <tbody >
          <tr>
            <th className="border border-black p-4">Select</th>
            <th className="border border-black p-4">Name</th>
            <th className="border border-black p-4">Wingspan (ft)</th>
            <th className="border border-black p-4">Number of Engines</th>
            <th className="border border-black p-4">Manufacturing Year</th>
          </tr>
          {/* mapping each jet to an individual row */}
          {jets.map((jet) => (
            <tr className='bg-white' key={jet.id}>
              <td className="border border-black p-4"><input type="checkbox"/></td>
              <td className="border border-black p-4">{jet.name}</td>
              <td className="border border-black p-4">{jet.wingspan}</td>
              <td className="border border-black p-4">{jet.engines}</td>
              <td className="border border-black p-4">{jet.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='mt-5'>Ask OpenAI GPT to Compare Selected Jets By</p>
    </div>
  );
}

// // retreive the jets from db
// export async function getServerSideProps() {
//   const jets = await prisma.jet.findMany({
//     orderBy: [
//       {
//         wingspan: 'desc'
//       }
//     ]
//   })
//   // console.log(jets)
//   return {
//     props: { 
//       jets
//     }
//   }
// }

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/getJets', {
    method: 'GET'
  })
  const jets = await res.json()
  console.log(jets)

  return {
    props: {
      jets
    }
  }
}
