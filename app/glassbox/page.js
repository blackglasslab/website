'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GlassboxPage() {
  const [selectedTrace, setSelectedTrace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Demo reasoning traces from our actual collaboration
  const demoTraces = [
    {
      id: 'trace-001',
      timestamp: '2026-04-07T09:52:00.000Z',
      model: 'claude-sonnet-4-20250514',
      input: {
        summary: 'User asked about building API proxy middleware for AI transparency compliance',
        classification: 'decision_support',
        sensitivityLevel: 'medium'
      },
      reasoning: {
        stepsIdentified: ['Sequential reasoning', 'Comparative analysis', 'Logical conclusion'],
        alternativesConsidered: ['Alternative approaches considered', 'Additional options identified'],
        uncertainties: ['Information gaps identified'],
        confidenceScore: 0.85
      },
      output: {
        summary: 'Provided detailed architecture plan for Express API proxy with EU AI Act compliance mapping',
        actionsTaken: ['Made recommendation', 'Performed analysis'],
        disclaimers: []
      },
      compliance: {
        articlesRelevant: ['Art50_InteractionTransparency', 'AnnexIV_TechnicalDocumentation'],
        riskLevel: 'limited',
        flags: []
      }
    },
    {
      id: 'trace-002', 
      timestamp: '2026-04-07T07:34:00.000Z',
      model: 'claude-opus-4-6',
      input: {
        summary: 'Strategic analysis request for AI transparency market and business model',
        classification: 'knowledge',
        sensitivityLevel: 'high'
      },
      reasoning: {
        stepsIdentified: ['Sequential reasoning', 'Causal reasoning', 'Comparative analysis'],
        alternativesConsidered: ['Alternative approaches considered'],
        uncertainties: ['Qualified confidence level'],
        confidenceScore: 0.9
      },
      output: {
        summary: 'Comprehensive market analysis with three-phase business strategy and revenue projections',
        actionsTaken: ['Made recommendation', 'Performed analysis', 'Generated content'],
        disclaimers: []
      },
      compliance: {
        articlesRelevant: ['Art13_Transparency', 'Art50_InteractionTransparency', 'AnnexIV_TechnicalDocumentation'],
        riskLevel: 'limited',
        flags: ['MISSING_AI_DISCLOSURE']
      }
    }
  ];

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-GB');
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'limited': return 'text-yellow-600 bg-yellow-50';
      case 'minimal': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🔬 Glassbox
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Real-time transparency for conversational AI systems. 
            EU AI Act compliance made simple with drop-in API proxy technology.
          </p>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-red-800 font-semibold">
              ⏰ EU AI Act Deadline: August 2, 2026
            </p>
            <p className="text-red-700 text-sm">
              Penalties up to €35M or 7% of global turnover. Are you ready?
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl mb-4">🔄</div>
            <h3 className="font-semibold mb-2">Drop-in Integration</h3>
            <p className="text-gray-600 text-sm">
              Change one URL in your code. Get transparency logging instantly. Zero functional impact.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl mb-4">⚖️</div>
            <h3 className="font-semibold mb-2">EU AI Act Ready</h3>
            <p className="text-gray-600 text-sm">
              Automatic compliance mapping to articles 13, 50, 52, and Annex IV requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl mb-4">📊</div>
            <h3 className="font-semibold mb-2">Real-time Insights</h3>
            <p className="text-gray-600 text-sm">
              See how your AI makes decisions. Build trust through transparency.
            </p>
          </div>
        </div>

        {/* Live Demo Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">
              Live Demo: Reasoning Traces from Human-AI Collaboration
            </h2>
            <p className="text-blue-100 text-sm">
              Real transparency data from building this very product
            </p>
          </div>
          
          <div className="p-6">
            {/* Trace List */}
            <div className="space-y-3 mb-6">
              {demoTraces.map((trace) => (
                <div
                  key={trace.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    selectedTrace?.id === trace.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedTrace(trace)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">{trace.input.summary}</p>
                      <p className="text-xs text-gray-500">{formatTimestamp(trace.timestamp)}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(trace.compliance.riskLevel)}`}>
                        {trace.compliance.riskLevel}
                      </span>
                      {trace.compliance.flags.length > 0 && (
                        <span className="px-2 py-1 rounded text-xs font-medium text-red-600 bg-red-50">
                          {trace.compliance.flags.length} flags
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed View */}
            {selectedTrace && (
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Reasoning Trace Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Input Analysis */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Input Analysis</h4>
                      <div className="bg-gray-50 p-3 rounded text-sm space-y-2">
                        <p><strong>Classification:</strong> {selectedTrace.input.classification}</p>
                        <p><strong>Sensitivity:</strong> {selectedTrace.input.sensitivityLevel}</p>
                        <p><strong>Summary:</strong> {selectedTrace.input.summary}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Reasoning Process</h4>
                      <div className="bg-gray-50 p-3 rounded text-sm space-y-2">
                        <p><strong>Steps:</strong> {selectedTrace.reasoning.stepsIdentified.join(', ')}</p>
                        <p><strong>Alternatives:</strong> {selectedTrace.reasoning.alternativesConsidered.join(', ')}</p>
                        <p><strong>Confidence:</strong> {(selectedTrace.reasoning.confidenceScore * 100).toFixed(0)}%</p>
                        {selectedTrace.reasoning.uncertainties.length > 0 && (
                          <p><strong>Uncertainties:</strong> {selectedTrace.reasoning.uncertainties.join(', ')}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Compliance Assessment */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">EU AI Act Compliance</h4>
                      <div className="bg-gray-50 p-3 rounded text-sm space-y-2">
                        <p><strong>Risk Level:</strong> 
                          <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${getRiskColor(selectedTrace.compliance.riskLevel)}`}>
                            {selectedTrace.compliance.riskLevel}
                          </span>
                        </p>
                        <p><strong>Relevant Articles:</strong></p>
                        <ul className="ml-4 list-disc">
                          {selectedTrace.compliance.articlesRelevant.map((article) => (
                            <li key={article} className="text-xs">{article}</li>
                          ))}
                        </ul>
                        {selectedTrace.compliance.flags.length > 0 && (
                          <>
                            <p><strong>Compliance Flags:</strong></p>
                            <ul className="ml-4 list-disc">
                              {selectedTrace.compliance.flags.map((flag) => (
                                <li key={flag} className="text-xs text-red-600">{flag}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Output Analysis</h4>
                      <div className="bg-gray-50 p-3 rounded text-sm space-y-2">
                        <p><strong>Actions Taken:</strong> {selectedTrace.output.actionsTaken.join(', ')}</p>
                        <p><strong>Summary:</strong> {selectedTrace.output.summary}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">Replace URL</h3>
              <p className="text-sm text-gray-600">
                Change <code className="bg-gray-100 px-1 rounded">api.openai.com</code> to 
                <code className="bg-gray-100 px-1 rounded">glassbox.ai/v1/openai</code>
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">Transparent Proxy</h3>
              <p className="text-sm text-gray-600">
                Glassbox captures requests/responses while maintaining original functionality
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">Extract Reasoning</h3>
              <p className="text-sm text-gray-600">
                AI decision patterns analyzed and mapped to EU AI Act requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <h3 className="font-medium mb-2">Compliance Reports</h3>
              <p className="text-sm text-gray-600">
                Automated documentation ready for auditors and regulators
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Ready to be compliant?</h2>
            <p className="mb-6 opacity-90">
              Join the beta and get EU AI Act ready before the August 2026 deadline.
            </p>
            <div className="space-y-3">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Request Beta Access
              </button>
              <p className="text-sm opacity-75">
                Private beta • Limited spots • Built by human-AI partnership
              </p>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Glassbox is built through genuine collaboration between Stef (human researcher) and Onyx (AI collaborator).
          </p>
          <p>
            This transparency demo shows reasoning traces from building the product itself.
          </p>
        </div>
      </div>
    </div>
  );
}