"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn, ZoomOut } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker, Line, ZoomableGroup } from "react-simple-maps";
import { CoverageData } from "../../../domain/entities/Location";

interface CoverageMapProps {
  data: CoverageData;
  lang?: 'en' | 'id';
}

export default function CoverageMap({ data, lang = 'id' }: CoverageMapProps) {
  const geoUrl = "/features.json";
  
  const [position, setPosition] = useState({ coordinates: [115, 10] as [number, number], zoom: 1 });

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleMoveEnd = (pos: { coordinates: [number, number]; zoom: number }) => {
    setPosition(pos);
  };

  const hub = data.locations.find((l) => l.type === 'hub');

  return (
    <section className="w-full bg-slate-100 text-slate-900 border-y border-slate-200 relative overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] mb-6">
            {lang === 'en' ? 'Global & ' : 'Jangkauan Global & '}<span className="text-[#38bdf8] relative inline-block">
              {lang === 'en' ? 'Domestic Reach' : 'Domestik'}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#38bdf8]/20 rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en' ? 'Connecting Nusantara with strategic business hubs worldwide through a fast, secure, and reliable air cargo flight network.' : 'Menghubungkan Nusantara dengan pusat bisnis strategis di seluruh dunia melalui jaringan penerbangan kargo yang cepat, aman, dan dapat diandalkan.'}
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-white border border-slate-200 overflow-hidden rounded-lg shadow-xl">
          <ComposableMap 
            projectionConfig={{
              scale: 250,
              center: [115, 10] // Centered around Asia/Indonesia
            }}
            width={800}
            height={400}
            style={{ width: "100%", height: "100%" }}
          >
            <ZoomableGroup 
              zoom={position.zoom} 
              center={position.coordinates} 
              onMoveEnd={handleMoveEnd}
            >
              {/* Base Map Geographies */}
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#e2e8f0"
                      stroke="#cbd5e1"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#cbd5e1", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Routes / Lines */}
              {data.routes.map((route, i) => {
                const from = data.locations.find((l) => l.id === route.fromId);
                const to = data.locations.find((l) => l.id === route.toId);

                if (!from || !to) return null;

                return (
                  <Line
                    key={route.id}
                    from={from.coordinates}
                    to={to.coordinates}
                    stroke={route.type === 'primary' ? '#F26419' : '#0A2540'}
                    strokeWidth={1}
                    strokeLinecap="round"
                    className="animate-pulse" // Simple pulse for now, or we can use Framer Motion
                    style={{ opacity: 0.6 }}
                  />
                );
              })}

              {/* Markers */}
              {data.locations.map((loc, i) => (
                <Marker key={loc.id} coordinates={loc.coordinates}>
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.5, type: 'spring' }}
                    className="cursor-pointer group"
                  >
                    <circle
                      r={loc.type === 'hub' ? 6 : 4}
                      fill={
                        loc.type === 'hub' 
                          ? '#F26419' 
                          : loc.type === 'international' 
                            ? '#0A2540' 
                            : '#38bdf8'
                      }
                      stroke="white"
                      strokeWidth={1.5}
                    />

                    {/* Label (SVG text) */}
                    <text
                      textAnchor="middle"
                      y={15}
                      style={{ 
                        fontFamily: "monospace", 
                        fontSize: "8px", 
                        fill: loc.type === 'hub' ? '#F26419' : '#1e293b',
                        pointerEvents: "none"
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {loc.name}
                    </text>
                  </motion.g>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>

          {/* Zoom Controls */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <button 
              onClick={handleZoomIn}
              className="p-2 bg-white rounded-md shadow-md border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-sky-600 transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={20} />
            </button>
            <button 
              onClick={handleZoomOut}
              className="p-2 bg-white rounded-md shadow-md border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-sky-600 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={20} />
            </button>
          </div>
        </div>
        
        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F26419] border border-white shadow-sm" />
            <span>Main Hub (CGK)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#0A2540] border border-white shadow-sm" />
            <span>International</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#38bdf8] border border-white shadow-sm" />
            <span>Domestic</span>
          </div>
        </div>
      </div>
    </section>
  );
}
