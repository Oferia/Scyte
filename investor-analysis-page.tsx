import React, { useState } from 'react';
import { Users, TrendingUp, Target, DollarSign, Building2, ChevronDown, ChevronRight, PieChart, BarChart, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function InvestorAnalysis() {
  const [activeTab, setActiveTab] = useState('market');
  const [expandedSection, setExpandedSection] = useState('healthcare-admins');

  const marketData = [
    { year: '2024', value: 5.2 },
    { year: '2025', value: 6.8 },
    { year: '2026', value: 8.9 },
    { year: '2027', value: 11.2 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Patient Experience Platform: Market Analysis & Investment Opportunity
          </h1>
          <p className="text-xl opacity-90">
            A comprehensive analysis of the patient experience management market and our solution's positioning
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'market', label: 'Market Overview', icon: <PieChart className="w-4 h-4" /> },
              { id: 'buyers', label: 'Buyer Analysis', icon: <Users className="w-4 h-4" /> },
              { id: 'opportunity', label: 'Growth Opportunity', icon: <TrendingUp className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 ${
                  activeTab === tab.id 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Market Overview Section */}
        {activeTab === 'market' && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Market Size & Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Market Statistics</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>$5.2B market size in 2024</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>21.5% CAGR projected through 2027</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>85% of hospitals planning digital transformation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="h-64 bg-gray-50 rounded-lg p-4">
                    {/* Placeholder for market growth chart */}
                    <div className="text-center text-gray-500">Market Growth Chart</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span>Market Drivers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Digital Transformation",
                      description: "Healthcare providers accelerating adoption of digital solutions",
                      percentage: "85%"
                    },
                    {
                      title: "Patient Satisfaction",
                      description: "Growing focus on patient experience as a key metric",
                      percentage: "92%"
                    },
                    {
                      title: "Operational Efficiency",
                      description: "Need to reduce administrative costs and improve workflow",
                      percentage: "78%"
                    }
                  ].map(driver => (
                    <div key={driver.title} className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">{driver.title}</h4>
                      <p className="text-gray-600 mb-4">{driver.description}</p>
                      <div className="text-2xl font-bold text-blue-600">{driver.percentage}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Buyer Analysis Section */}
        {activeTab === 'buyers' && (
          <div className="space-y-6">
            {[
              {
                id: 'healthcare-admins',
                title: 'Healthcare Administrators',
                icon: <Building2 className="w-5 h-5" />,
                budget: "$50K-200K annually",
                willingness: "High",
                reasons: [
                  "Direct responsibility for patient satisfaction scores",
                  "Need to improve operational efficiency",
                  "Focus on patient retention and revenue growth"
                ]
              },
              {
                id: 'medical-directors',
                title: 'Chief Medical Officers',
                icon: <Users className="w-5 h-5" />,
                budget: "$100K-500K annually",
                willingness: "Medium-High",
                reasons: [
                  "Quality of care improvements",
                  "Better clinical outcomes through engagement",
                  "Reduced patient complaints"
                ]
              },
              {
                id: 'private-practice',
                title: 'Private Practice Owners',
                icon: <Building2 className="w-5 h-5" />,
                budget: "$20K-75K annually",
                willingness: "High",
                reasons: [
                  "Competitive advantage in local market",
                  "Practice efficiency improvements",
                  "Direct control over technology decisions"
                ]
              }
            ].map(buyer => (
              <Card key={buyer.id}>
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedSection(
                    expandedSection === buyer.id ? '' : buyer.id
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {buyer.icon}
                      <h3 className="text-xl font-semibold">{buyer.title}</h3>
                    </div>
                    {expandedSection === buyer.id ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </div>
                  
                  {expandedSection === buyer.id && (
                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Budget Range</h4>
                        <p className="text-gray-600">{buyer.budget}</p>
                        
                        <h4 className="font-semibold mt-4 mb-2">Willingness to Pay</h4>
                        <p className="text-gray-600">{buyer.willingness}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Key Reasons to Buy</h4>
                        <ul className="space-y-2">
                          {buyer.reasons.map((reason, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-gray-600">{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Growth Opportunity Section */}
        {activeTab === 'opportunity' && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Growth Trajectory</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Growth Drivers</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Increasing focus on patient satisfaction scores</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Digital transformation in healthcare</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Rising demand for telehealth solutions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {/* Placeholder for growth projection chart */}
                    <div className="text-center text-gray-500">Growth Projection Chart</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
