import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GlassCard } from './ui/GlassCard';

const data = [
  { name: 'Website', value: 4000 },
  { name: 'Platform', value: 3000 },
  { name: 'Add-ons', value: 2000 },
  { name: 'AI/Auto', value: 2780 },
  { name: 'Design', value: 1890 },
];

export const AdminPanel: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 gold-gradient-text">Executive Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <GlassCard>
          <p className="text-gray-400 text-sm mb-2">Total Revenue (YTD)</p>
          <p className="text-3xl font-bold text-white">$142,500</p>
        </GlassCard>
        <GlassCard>
          <p className="text-gray-400 text-sm mb-2">Pending Invoices</p>
          <p className="text-3xl font-bold text-white">8</p>
        </GlassCard>
        <GlassCard>
          <p className="text-gray-400 text-sm mb-2">Conversion Rate</p>
          <p className="text-3xl font-bold text-[#F5C26B]">12.4%</p>
        </GlassCard>
      </div>

      <GlassCard className="h-[400px] mb-12">
        <h3 className="text-xl font-bold mb-6 text-white">Revenue by Category</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#666" tick={{fill: '#888'}} />
            <YAxis stroke="#666" tick={{fill: '#888'}} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
              itemStyle={{ color: '#F5C26B' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`url(#colorGradient)`} />
              ))}
            </Bar>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F5C26B" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#D8891C" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-white">Recent Inquiries</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="border-b border-white/10 text-xs uppercase tracking-wider text-[#F5C26B]">
              <tr>
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Project Type</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[1, 2, 3, 4].map((i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Enterprise Corp {i}</td>
                  <td className="py-3 px-4">Full Platform Build</td>
                  <td className="py-3 px-4">Oct {20 + i}, 2024</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs">Pending</span></td>
                  <td className="py-3 px-4 text-right text-white">$24,500</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
