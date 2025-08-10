import React from 'react';
import { supabase } from '../lib/supabase';
import { LogOut, Calendar, Users, MapPin, Utensils, Music } from 'lucide-react';

interface DashboardProps {
  user: any;
}

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      
      {/* Header */}
      <div className="relative z-10">
        <div className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold tracking-tight text-gray-900">eventify</span>
              <span className="text-xl font-semibold tracking-tight text-blue-500">AI</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {user?.user_metadata?.full_name || user?.email}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">
            Your Event Planning Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan your perfect event with AI assistance. We'll help you with venues, catering, guest management, and more.
          </p>
        </div>

        {/* Event Planning Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Guest List</h3>
            <p className="text-gray-600 text-sm mb-4">
              Manage your guest list with dietary restrictions and special notes
            </p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Manage Guests
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Venues</h3>
            <p className="text-gray-600 text-sm mb-4">
              Find and negotiate with hotels, restaurants, and corporate venues
            </p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
              Browse Venues
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Utensils className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Catering</h3>
            <p className="text-gray-600 text-sm mb-4">
              Explore food options and get quotes from local caterers
            </p>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
              Find Catering
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Music className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Decor & Entertainment</h3>
            <p className="text-gray-600 text-sm mb-4">
              Plan decorations, entertainment, and special touches
            </p>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
              Plan Details
            </button>
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Ready to start planning?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Create your first event and let our AI help you plan everything from start to finish.
            </p>
            <button className="bg-gray-900 text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors font-medium">
              Create New Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
