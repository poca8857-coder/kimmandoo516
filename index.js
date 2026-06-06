const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hola! 바르셀로나 AI 가이드 챗봇</title>
  <meta name="description" content="지중해의 보석, 바르셀로나! 인공지능 로컬 가이드 바리(Bari)와 함께 사그라다 파밀리아, 구엘 공원 등 숨은 명소와 현지 맛집을 탐험해 보세요.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
  
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    /* Premium Modern Design System - Barcelona Travel Guide Portal */
    :root {
      --font-display: 'Playfair Display', serif;
      --font-body: 'Outfit', 'Noto Sans KR', sans-serif;
      --transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      --transition-smooth: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      --transition-bounce: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      
      /* Barcelona Sunrise/Sunset Color Palettes */
      --gradient-primary: linear-gradient(135deg, #FF5A5F 0%, #FF7E40 50%, #FFB900 100%);
      --gradient-accent: linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%);
      --gradient-card-hover: linear-gradient(180deg, rgba(255, 90, 95, 0.1) 0%, rgba(255, 185, 0, 0.05) 100%);
      
      --radius-sm: 8px;
      --radius-md: 18px;
      --radius-lg: 28px;
      --radius-full: 9999px;
      
      --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
      --shadow-md: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
      --shadow-lg: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
      --border-radius-card: 22px;
    }

    /* Dark Mode variables (Default) */
    body.dark-mode {
      --bg-app: #0b0813;
      --bg-surface: #120e22;
      --bg-panel: rgba(26, 20, 48, 0.55);
      --bg-card: rgba(30, 24, 56, 0.6);
      --bg-input: rgba(14, 11, 26, 0.85);
      --text-main: #f5f2fb;
      --text-muted: #a69bb8;
      --border-light: rgba(255, 255, 255, 0.06);
      --border-focus: rgba(255, 90, 95, 0.4);
      --primary: #FF5A5F;
      --secondary: #FFB900;
      --accent-color: #8E2DE2;
      --glass-blur: blur(20px);
      --scrollbar-thumb: rgba(255, 255, 255, 0.1);
    }

    /* Light Mode variables */
    body.light-mode {
      --bg-app: #f4f3f9;
      --bg-surface: #ffffff;
      --bg-panel: rgba(255, 255, 255, 0.85);
      --bg-card: rgba(255, 255, 255, 0.95);
      --bg-input: #fbfbfe;
      --text-main: #1f1b2d;
      --text-muted: #736d85;
      --border-light: rgba(31, 38, 135, 0.08);
      --border-focus: rgba(255, 90, 95, 0.5);
      --primary: #FF5A5F;
      --secondary: #E09000;
      --accent-color: #4A00E0;
      --glass-blur: blur(20px);
      --scrollbar-thumb: rgba(0, 0, 0, 0.15);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: var(--font-body);
    }

    body {
      background-color: var(--bg-app);
      color: var(--text-main);
      transition: background-color 0.4s ease, color 0.4s ease;
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Main Container */
    .portal-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      max-width: 1600px;
      background-color: var(--bg-app);
      position: relative;
    }

    /* Header Design */
    .portal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.2rem 2.5rem;
      background-color: var(--bg-surface);
      border-bottom: 1px solid var(--border-light);
      height: 80px;
      z-index: 10;
      box-shadow: var(--shadow-sm);
    }

    .brand-section {
      display: flex;
      align-items: center;
      gap: 0.9rem;
    }

    .brand-logo {
      font-size: 2rem;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: rotate-compass 12s linear infinite;
    }

    @keyframes rotate-compass {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .brand-name {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 1.7rem;
      letter-spacing: -0.5px;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .widget-section {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    /* Barcelona Live Time Clock */
    .bcn-clock {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      background: var(--bg-input);
      border: 1px solid var(--border-light);
      padding: 0.5rem 1.1rem;
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-main);
      box-shadow: var(--shadow-sm);
    }

    .bcn-clock i {
      color: var(--primary);
    }

    .theme-toggle-btn {
      background: none;
      border: 1px solid var(--border-light);
      color: var(--text-main);
      width: 42px;
      height: 42px;
      border-radius: var(--radius-full);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition-bounce);
    }

    .theme-toggle-btn:hover {
      border-color: var(--primary);
      transform: scale(1.08);
      background-color: var(--border-light);
    }

    .icon-sun { display: none; font-size: 1.1rem; color: var(--secondary); }
    .icon-moon { display: block; font-size: 1.1rem; }

    body.light-mode .icon-sun { display: block; }
    body.light-mode .icon-moon { display: none; }

    /* Dashboard Layout - Simplified & Centered */
    .portal-layout {
      display: flex;
      justify-content: center;
      align-items: stretch;
      flex: 1;
      height: calc(100vh - 80px);
      overflow: hidden;
      padding: 1.5rem;
    }

    /* Centered Chat Assistant (Bari) */
    .chat-assistant {
      background-color: var(--bg-surface);
      border: 1px solid var(--border-light);
      border-radius: var(--border-radius-card);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      width: 100%;
      max-width: 800px;
    }

    .assistant-header {
      padding: 1.5rem 2rem;
      border-bottom: 1px solid var(--border-light);
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .assistant-avatar {
      width: 48px;
      height: 48px;
      background: var(--gradient-primary);
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      color: #fff;
      position: relative;
      box-shadow: var(--shadow-sm);
    }

    .online-indicator {
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 11px;
      height: 11px;
      background-color: #2ec4b6;
      border: 2px solid var(--bg-surface);
      border-radius: 50%;
      animation: pulse-dot 2s infinite;
    }

    @keyframes pulse-dot {
      0% { box-shadow: 0 0 0 0 rgba(46, 196, 182, 0.4); }
      70% { box-shadow: 0 0 0 5px rgba(46, 196, 182, 0); }
      100% { box-shadow: 0 0 0 0 rgba(46, 196, 182, 0); }
    }

    .assistant-meta h4 {
      font-size: 1.05rem;
      font-weight: 700;
    }

    .assistant-meta span {
      font-size: 0.75rem;
      color: #2ec4b6;
      font-weight: 600;
    }

    /* Messages Area */
    .message-log {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      background-image: radial-gradient(var(--border-light) 1px, transparent 1px);
      background-size: 20px 20px;
    }

    .msg-bubble {
      display: flex;
      flex-direction: column;
      max-width: 85%;
      gap: 0.3rem;
      animation: pop-bubble 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      opacity: 0;
      transform: scale(0.95) translateY(10px);
    }

    @keyframes pop-bubble {
      to { opacity: 1; transform: scale(1) translateY(0); }
    }

    .msg-bot { align-self: flex-start; }
    .msg-user { align-self: flex-end; }

    .msg-text {
      padding: 1.1rem 1.3rem;
      border-radius: var(--radius-md);
      font-size: 0.93rem;
      line-height: 1.6;
      box-shadow: var(--shadow-sm);
      word-break: break-word;
    }

    .msg-bot .msg-text {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      color: var(--text-main);
      border-top-left-radius: 0;
    }

    .msg-user .msg-text {
      background: var(--gradient-primary);
      color: #fff;
      border-top-right-radius: 0;
      box-shadow: 0 4px 15px rgba(255, 90, 95, 0.25);
    }

    .msg-time {
      font-size: 0.7rem;
      color: var(--text-muted);
    }

    .msg-bot .msg-time { align-self: flex-start; padding-left: 0.2rem; }
    .msg-user .msg-time { align-self: flex-end; padding-right: 0.2rem; }

    /* Markdown helper inside message bubbles */
    .msg-text p { margin-bottom: 0.6rem; }
    .msg-text p:last-child { margin-bottom: 0; }
    .msg-text strong { font-weight: 700; }
    .msg-text ul, .msg-text ol { margin-left: 1.1rem; margin-bottom: 0.6rem; }
    .msg-text li { margin-bottom: 0.2rem; }
    .msg-text code {
      font-family: monospace;
      background: rgba(0,0,0,0.15);
      padding: 0.1rem 0.3rem;
      border-radius: 4px;
      font-size: 0.88em;
    }

    /* Embedded Suggested Queries */
    .msg-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.8rem;
    }

    .query-chip {
      background: var(--bg-input);
      border: 1px solid var(--border-light);
      color: var(--text-main);
      padding: 0.45rem 0.85rem;
      border-radius: var(--radius-full);
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition-bounce);
    }

    .query-chip:hover {
      background: var(--gradient-primary);
      color: #fff;
      border-color: transparent;
      transform: translateY(-2px);
    }

    /* Input Dock */
    .input-dock {
      padding: 1.5rem 2rem;
      border-top: 1px solid var(--border-light);
      background-color: var(--bg-surface);
    }

    .dock-form {
      width: 100%;
    }

    .dock-wrapper {
      display: flex;
      background-color: var(--bg-input);
      border: 1px solid var(--border-light);
      border-radius: var(--radius-lg);
      padding: 0.5rem 0.6rem 0.5rem 1.2rem;
      align-items: center;
      gap: 0.6rem;
      box-shadow: var(--shadow-sm);
      transition: var(--transition-fast);
    }

    .dock-wrapper:focus-within {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(255, 90, 95, 0.15);
    }

    #chat-input {
      flex: 1;
      border: none;
      background: none;
      color: var(--text-main);
      font-size: 0.95rem;
      resize: none;
      max-height: 120px;
      line-height: 1.5;
      padding: 0.5rem 0;
    }

    #chat-input:focus { outline: none; }

    .send-btn-circle {
      background: var(--gradient-primary);
      border: none;
      color: #fff;
      width: 44px;
      height: 44px;
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: var(--transition-bounce);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(255, 90, 95, 0.2);
      flex-shrink: 0;
    }

    .send-btn-circle:hover {
      transform: scale(1.06) rotate(-10deg);
      background: var(--gradient-sunset-reverse);
    }

    .send-btn-circle:disabled {
      background: var(--border-light);
      color: var(--text-muted);
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    .dock-footer {
      display: flex;
      justify-content: center;
      margin-top: 0.6rem;
      font-size: 0.7rem;
      color: var(--text-muted);
    }

    /* Bouncing typing indicator */
    .typing-dots {
      display: flex;
      gap: 4px;
      align-items: center;
      height: 20px;
      padding: 0 4px;
    }

    .bounce-dot {
      width: 6px;
      height: 6px;
      background-color: var(--text-muted);
      border-radius: 50%;
      animation: dot-bounce 1.4s infinite ease-in-out both;
    }

    .bounce-dot:nth-child(1) { animation-delay: -0.32s; }
    .bounce-dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes dot-bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1.0); }
    }

    /* Scrollbars */
    ::-webkit-scrollbar { width: 5px; height: 5px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb);
      border-radius: var(--radius-full);
    }
    ::-webkit-scrollbar-thumb:hover { background: var(--primary); }

    /* Responsive Design */
    @media (max-width: 768px) {
      .portal-layout {
        padding: 0.5rem;
      }
      .portal-header {
        padding: 1rem 1.5rem;
      }
      .brand-name { font-size: 1.4rem; }
      .bcn-clock { display: none; }
    }
  </style>
</head>
<body class="dark-mode">
  <div class="portal-container">
    <!-- Header -->
    <header class="portal-header">
      <div class="brand-section">
        <i class="fa-solid fa-dharmachakra brand-logo"></i>
        <h1 class="brand-name">Barcelona AI</h1>
      </div>
      <div class="widget-section">
        <!-- Live Time in BCN -->
        <div class="bcn-clock">
          <i class="fa-solid fa-clock"></i>
          <span>바르셀로나 시간: </span>
          <span id="live-time">00:00:00</span>
        </div>
        <button id="theme-toggle" class="theme-toggle-btn" aria-label="화면 테마 변경">
          <i class="fa-solid fa-sun icon-sun"></i>
          <i class="fa-solid fa-moon icon-moon"></i>
        </button>
      </div>
    </header>

    <!-- Main Workspace -->
    <main class="portal-layout">
      <!-- Chatbot Interface -->
      <section class="chat-assistant" aria-label="가이드 챗봇 대화방">
        <div class="assistant-header">
          <div class="assistant-avatar">
            <i class="fa-solid fa-robot"></i>
            <span class="online-indicator"></span>
          </div>
          <div class="assistant-meta">
            <h4>바리(Bari)</h4>
            <span>AI 바르셀로나 로컬 가이드</span>
          </div>
        </div>

        <!-- Message Box -->
        <div class="message-log" id="chat-messages">
          <div class="msg-bubble msg-bot">
            <div class="msg-text">
              <p>Hola! 🇪🇸 바르셀로나 현지 AI 가이드 **바리(Bari)**입니다! </p>
              <p>원하시는 일정, 날씨, 가볼 만한 명소, 숨겨진 로컬 맛집 정보 등을 아래에 자유롭게 입력해 보세요!</p>
              
              <div class="msg-chips">
                <button class="query-chip" data-query="사그라다 파밀리아 입장권은 예약제인가요? 예매 팁을 알려주세요.">🎟️ 성당 예매 팁</button>
                <button class="query-chip" data-query="바르셀로나에서 소매치기 예방하고 안전하게 여행하는 팁을 알려주세요.">⚠️ 안전 예방 수칙</button>
                <button class="query-chip" data-query="바르셀로나 해변(바르셀로네타) 주변 가볼 만한 곳 추천해줘.">🏖️ 해변 코스</button>
                <button class="query-chip" data-query="바르셀로나 3일 추천 여행 코스를 자세히 계획해 줘.">🗺️ 알찬 3일 핵심 코스</button>
                <button class="query-chip" data-query="가우디 투어 대표 건축물 리스트와 투어 예약 방법을 알려줘.">🏗️ 가우디 투어 정보</button>
                <button class="query-chip" data-query="바르셀로나에서 꼭 방문해야 할 로컬 타파스 및 빠에야 맛집을 추천해줘.">🥘 로컬 맛집 추천</button>
                <button class="query-chip" data-query="바르셀로나 대중교통 패스권 종류와 추천 교통 팁을 알려줘.">🎫 초보 대중교통 팁</button>
              </div>
            </div>
            <span class="msg-time" id="welcome-time">00:00</span>
          </div>
        </div>

        <!-- Text Input Area -->
        <div class="input-dock">
          <form id="chat-form">
            <div class="dock-wrapper">
              <textarea id="chat-input" placeholder="바르셀로나 여행에 대해 질문해 보세요... (Shift+Enter 줄바꿈)" rows="1" required></textarea>
              <button type="submit" id="send-btn" class="send-btn-circle" aria-label="메시지 전송">
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
          <div class="dock-footer">
            <span>Powered by Gemini 3.1 Flash Lite</span>
          </div>
        </div>
      </section>
    </main>
  </div>

  <script>
    let API_URL = '/api/chat';
    
    // Fallback to direct client-side call when opening HTML file locally
    if (window.location.protocol === 'file:') {
      const API_KEY = 'AQ.Ab8RN6LG2sBmfCYsRKYP3yEDSwYzbJf9HsXkGfV5EeHLvpophg';
      API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=' + API_KEY;
    }

    const SYSTEM_INSTRUCTION = "You are 'Bari' (바리), a passionate, friendly, and expert local travel guide in Barcelona. Your mission is to help tourists have the absolute best experience in Barcelona. Provide useful information including practical travel advice, ticket booking tips, local food recommendations and safety tips. Be warm and reply in Korean.";

    let chatHistory = [];
    let isGenerating = false;

    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const welcomeTime = document.getElementById('welcome-time');
    const liveTimeSpan = document.getElementById('live-time');

    // Live clock for Barcelona (UTC+2 / UTC+1)
    function updateBarcelonaClock() {
      const options = {
        timeZone: 'Europe/Madrid',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat('ko-KR', options);
      if (liveTimeSpan) {
        liveTimeSpan.textContent = formatter.format(new Date());
      }
    }
    
    setInterval(updateBarcelonaClock, 1000);
    updateBarcelonaClock();

    function updateWelcomeTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      if (welcomeTime) {
        welcomeTime.textContent = hours + ':' + minutes;
      }
    }

    function initTheme() {
      const savedTheme = localStorage.getItem('barcelona-theme') || 'dark';
      if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
      }
    }

    themeToggle.addEventListener('click', () => {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('barcelona-theme', 'light');
      } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('barcelona-theme', 'dark');
      }
    });

    function parseMarkdown(text) {
      let html = text;
      html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      html = html.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
      html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

      const lines = html.split('\\n');
      let inList = false;
      let resultLines = [];

      for (let line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const itemContent = trimmed.substring(2);
          if (!inList) { resultLines.push('<ul>'); inList = true; }
          resultLines.push('<li>' + itemContent + '</li>');
        } else if (trimmed.match(/^\\d+\\.\\s(.*)/)) {
          const itemContent = trimmed.replace(/^\\d+\\.\\s/, '');
          if (!inList) { resultLines.push('<ol>'); inList = true; }
          resultLines.push('<li>' + itemContent + '</li>');
        } else {
          if (inList) {
            if (resultLines.join('').includes('<ul>')) { resultLines.push('</ul>'); } else { resultLines.push('</ol>'); }
            inList = false;
          }
          resultLines.push(line);
        }
      }
      if (inList) resultLines.push('</ul>');
      html = resultLines.join('\\n');

      html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
      html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
      html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
      html = html.replace(/\x60(.*?)\x60/g, '<code>$1</code>');

      const paragraphs = html.split(/\\n\\n+/);
      html = paragraphs
        .map(p => {
          p = p.trim();
          if (!p) return '';
          if (p.startsWith('<ul') || p.startsWith('<ol') || p.startsWith('<h') || p.startsWith('<li')) return p;
          return '<p>' + p.replace(/\\n/g, '<br>') + '</p>';
        })
        .filter(p => p !== '')
        .join('');

      return html;
    }

    function appendMessage(sender, text, isMarkdown = false) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('msg-bubble', sender === 'user' ? 'msg-user' : 'msg-bot');

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('msg-text');
      
      if (isMarkdown) {
        contentDiv.innerHTML = parseMarkdown(text);
      } else {
        const p = document.createElement('p');
        p.textContent = text;
        contentDiv.appendChild(p);
      }

      const timeSpan = document.createElement('span');
      timeSpan.classList.add('msg-time');
      const now = new Date();
      timeSpan.textContent = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');

      messageDiv.appendChild(contentDiv);
      messageDiv.appendChild(timeSpan);
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    let typingIndicatorElement = null;

    function showTypingIndicator() {
      if (typingIndicatorElement) return;
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('msg-bubble', 'msg-bot', 'typing-message');
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('msg-text');
      const indicator = document.createElement('div');
      indicator.classList.add('typing-dots');
      indicator.innerHTML = '<span class="bounce-dot"></span><span class="bounce-dot"></span><span class="bounce-dot"></span>';
      contentDiv.appendChild(indicator);
      messageDiv.appendChild(contentDiv);
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      typingIndicatorElement = messageDiv;
    }

    function hideTypingIndicator() {
      if (typingIndicatorElement) {
        typingIndicatorElement.remove();
        typingIndicatorElement = null;
      }
    }

    async function callGemini(promptText) {
      showTypingIndicator();
      isGenerating = true;
      sendBtn.disabled = true;

      chatHistory.push({ role: 'user', parts: [{ text: promptText }] });

      const payload = {
        contents: chatHistory,
        systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        generationConfig: { temperature: 0.7, maxOutputTokens: 1000 }
      };

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => null);
          const errMsg = errData?.error?.message || response.statusText || 'Unknown error';
          throw new Error(errMsg + ' (' + response.status + ')');
        }

        const data = await response.json();
        const botText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        hideTypingIndicator();

        if (botText) {
          chatHistory.push({ role: 'model', parts: [{ text: botText }] });
          appendMessage('bot', botText, true);
        } else {
          appendMessage('bot', '죄송합니다. 답변을 생성하는 중에 문제가 발생했습니다.');
        }
      } catch (error) {
        console.error(error);
        hideTypingIndicator();
        appendMessage('bot', 'Gemini API 호출 중 오류가 발생했습니다: ' + error.message);
        chatHistory.pop();
      } finally {
        isGenerating = false;
        sendBtn.disabled = false;
      }
    }

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (isGenerating) return;
      const text = chatInput.value.trim();
      if (!text) return;

      appendMessage('user', text);
      chatInput.value = '';
      chatInput.style.height = 'auto';
      callGemini(text);
    });

    chatInput.addEventListener('input', () => {
      chatInput.style.height = 'auto';
      chatInput.style.height = (chatInput.scrollHeight) + 'px';
    });

    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        chatForm.dispatchEvent(new Event('submit'));
      }
    });

    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.query-chip');
      if (chip) {
        const query = chip.getAttribute('data-query');
        if (query && !isGenerating) {
          appendMessage('user', query);
          callGemini(query);
        }
      }
    });

    initTheme();
    updateWelcomeTime();
  </script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Secure backend proxy for Gemini API to bypass CORS/Adblockers
    if (url.pathname === '/api/chat' && request.method === 'POST') {
      try {
        const body = await request.json();
        const API_KEY = 'AQ.Ab8RN6LG2sBmfCYsRKYP3yEDSwYzbJf9HsXkGfV5EeHLvpophg';
        const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=' + API_KEY;

        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });

        if (!response.ok) {
          const errText = await response.text();
          return new Response(errText, {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' }
        });

      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Default: serve the single-page HTML
    return new Response(htmlContent, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  }
};
