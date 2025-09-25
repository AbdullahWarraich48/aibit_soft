"use client";

import React, { useState } from "react";

type ScheduleMeetProps = {
  isOpen: boolean;
  onClose: () => void;
  organizationEmail?: string;
};

const ScheduleMeet: React.FC<ScheduleMeetProps> = ({ isOpen, onClose, organizationEmail }) => {
  const [title, setTitle] = useState<string>("Customer Meeting");
  const [description, setDescription] = useState<string>("Discussion about project");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [emails, setEmails] = useState<string>("");

  if (!isOpen) return null;

  const formatDate = (datetimeStr: string) => {
    const date = new Date(datetimeStr);
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!startTime || !endTime) {
      alert("Please provide both start and end times.");
      return;
    }

    const formattedStart = formatDate(startTime);
    const formattedEnd = formatDate(endTime);

    const normalizedOrgEmail = (organizationEmail || "").trim();
    const inputEmails = emails.replace(/\s+/g, "");
    const allEmails = [inputEmails, normalizedOrgEmail]
      .filter(Boolean)
      .join(",");

    const baseUrl = "https://calendar.google.com/calendar/u/0/r/eventedit";
    const params = new URLSearchParams({
      text: title,
      details: description,
      dates: `${formattedStart}/${formattedEnd}`,
      add: allEmails,
      location: "https://meet.google.com",
      vcon: "meet",
      hl: "en",
    });

    const calendarLink = `${baseUrl}?${params.toString()}`;
    window.open(calendarLink, "_blank");
    onClose();
  };

  // Disable backdrop and Escape-to-close; modal closes only via explicit buttons
  const handleBackdropClick = (_event: React.MouseEvent<HTMLDivElement>) => {};
  const handleKeyDown = (_event: React.KeyboardEvent<HTMLDivElement>) => {};

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a Google Meet"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
    >
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-800">Schedule a Google Meet</h2>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="mb-1 block text-sm font-medium text-slate-700">
              Subject
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="Customer Meeting"
            />
          </div>

          <div>
            <label htmlFor="description" className="mb-1 block text-sm font-medium text-slate-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="min-h-[90px] w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="Discussion about project"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="start" className="mb-1 block text-sm font-medium text-slate-700">
                Start time
              </label>
              <input
                id="start"
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div>
              <label htmlFor="end" className="mb-1 block text-sm font-medium text-slate-700">
                End time
              </label>
              <input
                id="end"
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>

          <div>
            <label htmlFor="emails" className="mb-1 block text-sm font-medium text-slate-700">
              Invitee emails (comma separated)
            </label>
            <input
              id="emails"
              type="text"
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
              required
              placeholder="example1@gmail.com, example2@gmail.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            {organizationEmail && (
              <p className="mt-1 text-xs text-slate-500">
                Your organization email <span className="font-medium">{organizationEmail}</span> will be auto-added.
              </p>
            )}
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Generate Meet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleMeet;


