import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { range: '0 - 100', items: 25 },
    { range: '101 - 200', items: 40 },
    { range: '201 - 300', items: 60 },
    { range: '301 - 400', items: 35 },
    { range: '401 - 500', items: 50 },
    { range: '501 - 600', items: 30 },
    { range: '601 - 700', items: 20 },
    { range: '701 - 800', items: 80 },
    { range: '801 - 900', items: 10 },
    { range: '901 - above', items: 5 }
];

export default function PriceRangeChart() {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-bold">Bar Chart Stats - June </strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 20
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="range" />
                        <YAxis domain={[0, 80]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="items" fill="#0ea5e9" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
