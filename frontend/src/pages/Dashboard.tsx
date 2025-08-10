import React from 'react'
import { useNavigate } from 'react-router-dom'
import { KPICard } from '../components/dashboard/KPICard'
import { VendorShortlist } from '../components/dashboard/VendorShortlist'
import { MessageThreads } from '../components/dashboard/MessageThreads'
import { TasksFollowups } from '../components/dashboard/TasksFollowups'
import { RSVPSnapshot } from '../components/dashboard/RSVPSnapshot'
import { PaymentsSnapshot } from '../components/dashboard/PaymentsSnapshot'
import { Users, ShoppingBag, DollarSign, Calendar, Plus } from 'lucide-react'

export function Dashboard() {
  const navigate = useNavigate()

  const handleCreateNewEvent = () => {
    navigate('/onboarding')
  }

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#CFFAFE]/20 to-[#A7F3D0]/20 pt-12 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-light text-[#0F172A]">
                Your Event Planning Dashboard
              </h1>
              <p className="mt-2 text-[#475569] font-light">
                Track all your event details in one place. Next milestone: Venue
                confirmation in 3 days.
              </p>
            </div>
            <button
              onClick={handleCreateNewEvent}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#CFFAFE] to-[#A7F3D0] text-[#0F172A] rounded-full hover:opacity-90 transition-opacity"
            >
              <Plus size={20} />
              Create New Event
            </button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-8">
        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Guests"
            value="78"
            subValue="/120"
            icon={<Users size={20} />}
          />
          <KPICard
            title="Vendors"
            value="5"
            subValue="/8 confirmed"
            icon={<ShoppingBag size={20} />}
          />
          <KPICard
            title="Budget"
            value="$18,500"
            subValue="/25,000"
            icon={<DollarSign size={20} />}
          />
          <KPICard
            title="Timeline"
            value="42 days"
            subValue="until event"
            icon={<Calendar size={20} />}
          />
        </div>
        {/* Two Column Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (8) */}
          <div className="lg:col-span-8">
            <VendorShortlist />
            <MessageThreads />
          </div>
          {/* Right Column (4) */}
          <div className="lg:col-span-4">
            <TasksFollowups />
            <RSVPSnapshot />
            <PaymentsSnapshot />
          </div>
        </div>
      </div>
    </div>
  )
}
