# ElderCare AI 👵🩺

> **"Your caring digital companion for safer, healthier and easier ageing — 100% API-Key-Free & Offline Ready."**

---

## 🌟 Overview & Problem Statement

Millions of elderly individuals live independently or spend long hours during the day without immediate assistance. They frequently encounter challenges including:
- **Medication Forgetfulness**: Missing doses or confusing morning/afternoon schedules.
- **Appointment Adherence**: Forgetting clinic visits and doctor instructions.
- **Loneliness & Isolation**: Feeling disconnected and seeking warm, respectful conversation.
- **Emergency Vulnerability & Falls**: Inability to quickly reach family or emergency services during a crisis or fall.
- **Complex Smartphone UIs**: Difficulty navigating cluttered, small-text applications.

**ElderCare AI** solves this with an elder-first, voice-enabled assistant powered by a **Local Intelligence Engine** designed around **simplicity, warmth, accessibility, and deterministic safety** — with **zero external AI API dependencies, zero API keys required, and zero cloud AI costs**.

---

## ✨ Key Features

### 1. 🤖 Local AI Care Companion (100% API-Free & Offline Ready)
- **Deterministic Local Intelligence**: Runs a multi-lingual intent classifier and local knowledge engine with zero external API calls.
- **Empathetic, Patient Persona**: Responds calmly, respectfully, and concisely in **English**, **Hindi (हिंदी)**, and **Hinglish**.
- **Context-Aware**: Dynamically answers questions using the elder's actual medicine schedule, doctor visits, and wellness state.
- **Voice In & Out**: Browser Web Speech API integration (`SpeechRecognition` + `SpeechSynthesis`) with calm pacing (0.88x) and Hindi/English voice synthesis.
- **Companionship & Storytelling**: Shares uplifting short stories, wholesome humor, and friendly conversation.

### 2. 🛡️ Strict Safety Guardrails & Emergency Intent Interceptor
- **Zero Medical Hallucinations**: Never invents medicines, alters dosages, or diagnoses illnesses.
- **Real-Time Acute Emergency Interception**: Intercepts distress phrases (*"chest pain"*, *"can't breathe"*, *"severe fall"*, *"stroke"*, *"साँस नहीं आ रही"*, *"छाती में दर्द"*, *"chakkar khakar behosh"*) before normal processing to trigger emergency workflows and the SOS interface.

### 3. 💊 Dynamic Medicine Reminder & Adherence Tracker
- Visual, color-coded daily timeline: Morning (08:00 AM), Afternoon (01:30 PM), Evening (08:00 PM), Night (09:30 PM).
- One-tap status buttons: `[TAKEN ✅]` (with celebration chime/confetti), `[SKIP ❌]`, `[PENDING 💊]`.
- Dynamic conversational queries: *"What medicines do I have today?"*, *"Which tablet is next?"*, *"Did I take my morning medicine?"*.

### 4. 📅 Dynamic Doctor Appointment Schedule
- Upcoming doctor visits with clinic location, time, doctor specialty, and purpose.
- Conversational appointment queries: *"When is my doctor appointment?"*, *"Who is my doctor?"*, *"Doctor ke paas kab jaana hai?"*.
- One-tap speed dial to clinic reception.

### 5. 🚨 High-Visibility Emergency / SOS Hub
- Oversized high-contrast emergency screen.
- **1-Tap Direct Calling**: Instant dialer links for Primary Caregiver (Rahul), National Emergency (112), and Ambulance (108).
- **Live Geolocation Sharing**: Captures GPS coordinates and generates Google Maps pin links.
- Emergency guidance protocol with audio readout.

### 6. 🚶‍♂️ Interactive Fall & Safety Assistance
- Triggered via voice or screen (*"I FELL DOWN"* / *"मैं गिर गई हूँ"* / *"Main gir gaya"*).
- **Triage**: *"Are you able to move safely?"*
  - **YES**: 4-step guided visual & audio recovery sequence (Rest & check pain ➔ Roll to hands & knees ➔ Crawl to sturdy chair ➔ Gently sit up).
  - **NO**: Dispatches high-priority emergency alert to caregiver and dials 112.

### 7. ❤️ Daily Wellness Check-In & Care Activity Score
- Intuitive emoji selection: 😊 Good, 🙂 Okay, 😐 Not Great, 😟 Worried, 😢 Low.
- Micro-trackers for Sleep (hours), Water intake (glasses), and Pain/Discomfort (0–10 scale & area).
- **Care Activity Score (0–100)**: Non-diagnostic routine adherence metric (Medication 50% + Check-in 30% + Routine 20%). *Explicitly labeled as a non-clinical activity score*.

### 8. 👨‍👩‍👧 Family / Caregiver Oversight Dashboard
- Real-time monitoring portal for family members (Rahul).
- Live medication compliance feed, wellness trend overview, and SOS incident resolution log.

### 9. ♿ Elder-Centric UI & Multilingual Design
- Body typography scaled to **18px – 26px** with high-contrast color palette (WCAG AAA compliant).
- Minimum **56px–76px** touch targets with zero confusing nested menus.
- Instant toggle between **English** and **Hindi (हिंदी)**.

---

## 🏗️ Architecture (API-Key-Free)

```
┌─────────────────────────────────────────────────────────┐
│                 React Frontend (Vite)                   │
│  - Web Speech API (STT Voice Input & TTS Voice Output)   │
│  - Accessible Touch-First UI (English / Hindi)          │
│  - Emergency SOS & Fall Assistance Modals               │
└────────────────────────────┬────────────────────────────┘
                             │ HTTP REST API
                             ▼
┌─────────────────────────────────────────────────────────┐
│               Node.js / Express Backend                 │
│  - /api/ai/chat (Local AI Conversation Route)           │
│  - /api/ai/classify (Intent & Emergency Route)          │
│  - /api/medicines, /api/appointments, /api/wellness     │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│             Local Intelligence Service Layer            │
│                 (server/services/)                      │
│                                                         │
│  1. safetyGuardrails.js  - Emergency check & triage     │
│  2. intentClassifier.js  - Multi-lingual intent matcher  │
│  3. medicineHandler.js   - Dynamic medicine queries     │
│  4. appointmentHandler.js- Dynamic doctor appointments  │
│  5. knowledgeBase.js     - Non-diagnostic health facts  │
│  6. storiesAndJokes.js   - Companionship, story, jokes  │
│  7. localAiService.js    - Master pipeline coordinator  │
└─────────────────────────────────────────────────────────┘
```

---

## 📂 Project Structure

```
eldercare-ai/
├── server/
│   ├── server.js                   # Express API server (Port 5000)
│   ├── data/
│   │   └── seedData.js             # Sample profiles (Kamla Devi, Rahul, Dr. Sharma)
│   ├── routes/
│   │   ├── ai.js                   # Local AI chat & intent classification endpoints
│   │   ├── medicines.js            # Medicine CRUD & adherence logs
│   │   ├── appointments.js         # Doctor appointments schedule
│   │   ├── wellness.js             # Daily check-ins & wellness logs
│   │   └── emergency.js            # SOS triggers & fall incident logs
│   └── services/
│       ├── localAiService.js       # Master Local AI orchestrator
│       ├── intentClassifier.js     # Multi-lingual intent classifier (EN, HI, Hinglish)
│       ├── safetyGuardrails.js     # Emergency triage & response sanitization
│       ├── medicineHandler.js      # Dynamic medicine query processor
│       ├── appointmentHandler.js   # Dynamic appointment query processor
│       ├── knowledgeBase.js        # Educational health knowledge base
│       └── storiesAndJokes.js      # Wholesome stories, jokes & companionship
│
├── src/
│   ├── contexts/
│   │   ├── AuthContext.jsx         # Role switcher (Elderly vs Caregiver)
│   │   ├── LanguageContext.jsx     # English / Hindi internationalization
│   │   ├── VoiceContext.jsx        # STT & TTS speech manager
│   │   └── HealthDataContext.jsx   # Unified reactive state for health & SOS
│   ├── locales/
│   │   ├── en.json                 # English UI text
│   │   └── hi.json                 # Hindi UI text (हिंदी)
│   ├── components/
│   │   ├── common/                 # BigButton, SpeechReader
│   │   ├── emergency/              # SOSModal, FallAssistanceModal
│   │   ├── caregiver/              # CareScoreCard
│   │   └── layout/                 # Navbar, Footer
│   ├── pages/
│   │   ├── ElderlyHome.jsx         # Accessible elderly home
│   │   ├── AIChatPage.jsx          # Voice-first AI Care Companion
│   │   ├── MedicinesPage.jsx       # Medicine tracker & [TAKEN]/[SKIP] toggles
│   │   ├── AppointmentsPage.jsx    # Doctor visits & clinic speed dial
│   │   ├── WellnessPage.jsx        # Emoji check-in & pain logging
│   │   ├── SOSPage.jsx             # Emergency SOS Center
│   │   ├── CaregiverDashboard.jsx  # Family oversight dashboard
│   │   └── SettingsPage.jsx        # Font size, voice rate & language
│   ├── services/
│   │   ├── api.js                  # REST client connecting to backend
│   │   └── speechService.js        # Web Speech API wrapper
│   └── utils/
│       ├── careScore.js            # Care Activity Score calculator
│       └── formatters.js           # Date & time formatting helpers
│
├── tests/
│   ├── emergencyClassifier.test.js
│   ├── localAiService.test.js
│   ├── careScore.test.js
│   ├── safetyGuardrailSanitizer.test.js
│   └── runAllTests.js
│
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Quick Start & Installation

### Prerequisites
- **Node.js**: v18+ or v20+
- **NPM**: v9+

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Application
```bash
npm run dev
```
This runs both the backend Express server (`http://localhost:5000`) and the Vite React frontend (`http://localhost:3000`) concurrently.

- **Frontend App**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`
- **Health Check**: `http://localhost:5000/api/health`

### 3. Run Automated Tests
```bash
npm test
```

---

## 🔒 Safety & Medical Disclaimer

> **IMPORTANT**: ElderCare AI is an assistive care and communication tool. It is **NOT** a medical device and does **NOT** provide clinical diagnoses, medical treatments, or prescription alterations. In any real-world medical emergency, users must immediately contact emergency services (112 / 108) or a qualified healthcare professional.
