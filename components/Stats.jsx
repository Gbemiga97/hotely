"use client"
import CountUp from "react-countup"

const statsData = [
    {
        value: 1.2,
        type: 'Hotels',
        unit: 'k'
    },
    {
        value: 4.8,
        type: 'Rooms',
        unit: 'k'
    },
    {
        value: 186,
        type: 'Countries',
        unit: null
    },
]

const Stats = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-x-8 gap-y-4 my-10">
        {
            statsData.map(({value, type, unit}, i) => (
                <div
                className="flex"
                 key={i}>
                    <div className='flex items-baseline gap-x-2  '>
                        <h3 className="h3 text-soft_green">
                            {/* checks if value is a decimal number */}
                            <CountUp
                            start={0}
                            end={value}
                            decimals={value % 1 !== 0 ? 1 : 0}
                            duration={6}
                            />
                            <span>{unit}</span>
                        </h3>
                        <p className="text-black font-semibold">
                            {type}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Stats