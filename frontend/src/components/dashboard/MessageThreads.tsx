import React from 'react'
import { Mail, Paperclip, ExternalLink } from 'lucide-react'

type Message = {
  id: string
  sender: string
  subject: string
  preview: string
  time: string
  hasAttachments: boolean
  unread: boolean
}

const messages: Message[] = [
  {
    id: '1',
    sender: 'Grand Ballroom',
    subject: 'Updated Quote for Summer Gala',
    preview:
      "I've attached the revised quote with the AV package included as requested.",
    time: '2h ago',
    hasAttachments: true,
    unread: true,
  },
  {
    id: '2',
    sender: 'Gourmet Delights',
    subject: 'Menu Options and Tasting',
    preview:
      "We'd like to invite you to a tasting session next week to finalize the menu.",
    time: '5h ago',
    hasAttachments: false,
    unread: false,
  },
  {
    id: '3',
    sender: 'Floral Fantasies',
    subject: 'Centerpiece Proposal',
    preview:
      "Based on your event theme, I've put together some centerpiece options.",
    time: '1d ago',
    hasAttachments: true,
    unread: false,
  },
]

export function MessageThreads() {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm mt-6">
      <div className="p-5 border-b border-[#E2E8F0] flex justify-between items-center">
        <h2 className="text-lg font-medium text-[#0F172A]">Message Threads</h2>
        <button className="text-sm text-[#3B82F6] hover:underline">
          View all
        </button>
      </div>
      <div className="divide-y divide-[#E2E8F0]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-5 flex gap-4 cursor-pointer hover:bg-[#F8FAFC] ${
              message.unread ? 'bg-[#F0F9FF]' : ''
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-[#94A3B8]" />
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-start">
                <h3
                  className={`font-medium ${
                    message.unread ? 'text-[#0F172A]' : 'text-[#475569]'
                  }`}
                >
                  {message.sender}
                </h3>
                <span className="text-xs text-[#94A3B8]">{message.time}</span>
              </div>
              <p className="text-sm font-medium text-[#475569] mt-0.5 truncate">
                {message.subject}
              </p>
              <p className="text-sm text-[#94A3B8] mt-1 truncate">
                {message.preview}
              </p>
              {message.hasAttachments && (
                <div className="flex items-center gap-1 mt-2 text-xs text-[#475569]">
                  <Paperclip size={14} />
                  <span>Attachments</span>
                </div>
              )}
            </div>
            <div className="flex items-center self-center">
              <ExternalLink size={16} className="text-[#94A3B8]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
