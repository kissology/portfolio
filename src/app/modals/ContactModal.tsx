"use client";

import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-purple-600 text-center mb-2">
          Send me a message!
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
          <label className="text-gray-400 text-sm mb-1">Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b w-full p-2 text-purple-600 focus:outline-none focus:border-purple-600 placeholder-purple-400 text-sm focus:placeholder-transparent"
              required
            />
            </div>
            <div className="flex flex-col">
             <label className="text-gray-400 text-sm mb-1">Your email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="border-b w-full p-2 text-purple-600 focus:outline-none focus:border-purple-600 placeholder-purple-400 text-sm focus:placeholder-transparent"
              required
            />
            </div>
          </div>
          <label className="text-gray-400 text-sm mb-1">Your message</label>
          <textarea
            placeholder="Say hello!"
            className="border-b w-full text-purple-600 pt-1 pb-2 px-2 focus:outline-none focus:border-purple-600 placeholder-purple-400 text-sm focus:placeholder-transparent"
            required
          />
          <div className="text-center mt-6">
            <button
              type="submit"
              className="border border-purple-600 text-purple-600 px-6 py-2 rounded hover:bg-purple-50 transition-all focus:placeholder-transparent"
            >
              SHOOT →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
