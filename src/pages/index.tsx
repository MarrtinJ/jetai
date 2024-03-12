import { Jet } from '@prisma/client';
import { ChangeEvent, useEffect, useState } from 'react';

type Props = {
  jets: Jet[]
}

export default function Home({ jets }: Props) {
  const [ selectedJets, setSelectedJets] = useState<string[]>([])
  const [trait, setTrait] = useState<string>("top speed")

  // for debugging state
  useEffect(() =>{
    console.log(trait)
    console.log(selectedJets)
  }, [trait, selectedJets])

  function handleCheckbox(event:ChangeEvent, jetId:number, jetName: string) {
    // console.log(event.target.checked)
    // console.log(id)
    // console.log(jet)

    if ((event.target as HTMLInputElement).checked) {
      // add jet to selected
      setSelectedJets([...selectedJets, jetName])
    } else {
      // remove jet
      setSelectedJets(selectedJets.filter((j: string) => j !== jetName))
    }
  }
  
  async function askChatGPT() {
    // console.log('Sending to ChatGPT')
    const prompt = `Could you rank the following jet(s) for me in terms of ${trait}?: ${selectedJets.join(", ")} `
    console.log(prompt)
    const res = await fetch('http://localhost:3000/api/askChatGPT', {
      method: 'POST',
      body: prompt
    })
    const body = await res.json()
    console.log(body)
  }

  return (
    <div className='ml-5 mt-5 gap-5'>
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
              <td className="border border-black p-4">
                <input type="checkbox"
                onChange={(e) => handleCheckbox(e, jet.id, jet.name)}/>
              </td>
              <td className="border border-black p-4">{jet.name}</td>
              <td className="border border-black p-4">{jet.wingspan}</td>
              <td className="border border-black p-4">{jet.engines}</td>
              <td className="border border-black p-4">{jet.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex flex-row mt-3 gap-3 items-center'>
        <p>Ask OpenAI GPT to Compare Selected Jets By</p>
        <select className='border border-black p-1 rounded-md'
          onChange={(e) => setTrait(e.target.value)}>
          <option value="top speed">Top Speed</option>
          <option value="fuel efficiency">Fuel Efficiency</option>
          <option value="maximum number of seats">Maximum Seats</option>
        </select>
        <button className='border border-black p-1 rounded-md' onClick={askChatGPT}>Compare Selected Jets</button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/getJets', {
    method: 'GET'
  })
  const jets = await res.json()

  return {
    props: {
      jets
    }
  }
}
