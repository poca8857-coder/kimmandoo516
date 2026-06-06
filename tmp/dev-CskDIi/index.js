var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// index.js
var htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\uBC14\uB974\uC140\uB85C\uB098 \uC5EC\uD589 \uAC00\uC774\uB4DC \uCC57\uBD07 - Barcelona Travel Guide Chatbot</title>
  <meta name="description" content="\uC778\uACF5\uC9C0\uB2A5 Gemini\uC640 \uD568\uAED8 \uB5A0\uB098\uB294 \uC544\uB984\uB2E4\uC6B4 \uBC14\uB974\uC140\uB85C\uB098 \uC5EC\uD589! \uC0AC\uADF8\uB77C\uB2E4 \uD30C\uBC00\uB9AC\uC544, \uAD6C\uC5D8 \uACF5\uC6D0, \uCE74\uC0AC \uBC14\uD2B8\uC694 \uB4F1 \uC8FC\uC694 \uBA85\uC18C\uC640 \uC228\uACA8\uC9C4 \uD0C0\uD30C\uC2A4 \uB9DB\uC9D1, \uB300\uC911\uAD50\uD1B5 \uD301\uC744 \uCC57\uBD07\uC5D0\uAC8C \uBB3C\uC5B4\uBCF4\uC138\uC694.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Outfit:wght@300;400;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
  
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    /* Modern Premium Styling - Barcelona Travel Guide Chatbot */
    :root {
      --font-heading: 'Outfit', 'Montserrat', 'Noto Sans KR', sans-serif;
      --font-body: 'Outfit', 'Inter', 'Noto Sans KR', sans-serif;
      --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      --transition-bounce: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      --gradient-sunset: linear-gradient(135deg, #FF5E62 0%, #FF9966 50%, #FFD97D 100%);
      --gradient-sunset-reverse: linear-gradient(135deg, #FF9966 0%, #FF5E62 100%);
      --gradient-bot-chat: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.07) 100%);
      --gradient-panel: linear-gradient(180deg, rgba(15, 12, 30, 0.6) 0%, rgba(20, 15, 38, 0.8) 100%);
      --radius-sm: 8px;
      --radius-md: 16px;
      --radius-lg: 24px;
      --radius-full: 9999px;
      --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
      --shadow-glass: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    }

    body.dark-mode {
      --bg-app: #09070f;
      --bg-sidebar: #0f0b1a;
      --bg-chat: #130f24;
      --bg-card: rgba(25, 20, 48, 0.65);
      --bg-card-hover: rgba(35, 29, 66, 0.85);
      --bg-input: rgba(13, 9, 26, 0.8);
      --text-main: #f3f0f7;
      --text-muted: #a89ebd;
      --text-inverse: #09070f;
      --border-light: rgba(255, 255, 255, 0.06);
      --border-active: rgba(255, 94, 98, 0.5);
      --primary: #FF5E62;
      --secondary: #FF9966;
      --accent: #FFD97D;
      --glass-bg: rgba(20, 15, 38, 0.6);
      --glass-border: rgba(255, 255, 255, 0.05);
      --scrollbar-thumb: rgba(255, 255, 255, 0.15);
      --scrollbar-track: rgba(0, 0, 0, 0.2);
    }

    body.light-mode {
      --bg-app: #f5f4fa;
      --bg-sidebar: #ffffff;
      --bg-chat: #fbfbfe;
      --bg-card: rgba(25, 25, 25, 0.05);
      --bg-card-hover: #ffffff;
      --bg-input: #ffffff;
      --text-main: #1f1a30;
      --text-muted: #6e6785;
      --text-inverse: #ffffff;
      --border-light: rgba(31, 38, 135, 0.08);
      --border-active: rgba(255, 94, 98, 0.6);
      --primary: #FF5E62;
      --secondary: #FF9966;
      --accent: #E58C00;
      --glass-bg: rgba(255, 255, 255, 0.7);
      --glass-border: rgba(31, 38, 135, 0.05);
      --gradient-bot-chat: linear-gradient(135deg, rgba(31, 38, 135, 0.03) 0%, rgba(31, 38, 135, 0.06) 100%);
      --gradient-panel: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 244, 250, 0.9) 100%);
      --scrollbar-thumb: rgba(0, 0, 0, 0.15);
      --scrollbar-track: rgba(0, 0, 0, 0.05);
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
      overflow: hidden;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .app-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      max-width: 1600px;
      background-color: var(--bg-app);
      box-shadow: var(--shadow-lg);
      border-left: 1px solid var(--border-light);
      border-right: 1px solid var(--border-light);
    }

    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: var(--bg-sidebar);
      border-bottom: 1px solid var(--border-light);
      height: 70px;
      z-index: 10;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .logo-icon {
      font-size: 1.8rem;
      background: var(--gradient-sunset);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: compass-spin 6s linear infinite alternate;
    }

    @keyframes compass-spin {
      0% { transform: rotate(-15deg); }
      100% { transform: rotate(15deg); }
    }

    .logo-container h1 {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.5rem;
      background: var(--gradient-sunset);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.5px;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .icon-btn {
      background: none;
      border: 1px solid var(--border-light);
      color: var(--text-main);
      padding: 0.6rem;
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: var(--transition-bounce);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }

    .icon-btn:hover {
      background-color: var(--border-light);
      transform: scale(1.08);
      border-color: var(--primary);
    }

    .icon-sun {
      display: none;
      font-size: 1.1rem;
    }

    .icon-moon {
      display: block;
      font-size: 1.1rem;
    }

    body.light-mode .icon-sun {
      display: block;
      color: var(--secondary);
    }

    body.light-mode .icon-moon {
      display: none;
    }

    .main-content {
      display: grid;
      grid-template-columns: 420px 1fr;
      flex: 1;
      height: calc(100vh - 70px);
      overflow: hidden;
    }

    .attractions-panel {
      background-color: var(--bg-sidebar);
      border-right: 1px solid var(--border-light);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .panel-header {
      padding: 1.5rem 1.5rem 1rem 1.5rem;
    }

    .panel-header h2 {
      font-family: var(--font-heading);
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 0.3rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .panel-header h2 i {
      color: var(--primary);
    }

    .panel-header p {
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    .attractions-list {
      padding: 0 1.5rem 1.5rem 1.5rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      flex: 1;
    }

    .attraction-card {
      background-color: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: var(--radius-md);
      overflow: hidden;
      cursor: pointer;
      transition: var(--transition-smooth);
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .attraction-card:hover {
      transform: translateY(-5px);
      background-color: var(--bg-card-hover);
      border-color: var(--border-active);
      box-shadow: var(--shadow-md);
    }

    .attraction-card:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }

    .card-image-wrapper {
      position: relative;
      width: 100%;
      height: 160px;
      overflow: hidden;
    }

    .card-image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition-smooth);
    }

    .attraction-card:hover .card-image-wrapper img {
      transform: scale(1.05);
    }

    .card-tag {
      position: absolute;
      top: 10px;
      left: 10px;
      background: var(--gradient-sunset);
      color: #fff;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 0.25rem 0.6rem;
      border-radius: var(--radius-full);
      box-shadow: var(--shadow-sm);
    }

    .card-content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .card-content h3 {
      font-family: var(--font-heading);
      font-size: 1.1rem;
      font-weight: 700;
    }

    .card-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.45;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .card-footer {
      margin-top: 0.4rem;
      display: flex;
      justify-content: flex-end;
    }

    .suggest-action {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--primary);
      display: flex;
      align-items: center;
      gap: 0.3rem;
      transition: var(--transition-smooth);
    }

    .attraction-card:hover .suggest-action {
      color: var(--secondary);
    }

    .chat-panel {
      background-color: var(--bg-chat);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
    }

    .chat-header {
      padding: 1rem 2rem;
      background-color: var(--bg-chat);
      border-bottom: 1px solid var(--border-light);
      display: flex;
      align-items: center;
      height: 70px;
    }

    .bot-info {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .bot-avatar {
      width: 44px;
      height: 44px;
      background: var(--gradient-sunset);
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: #fff;
      position: relative;
      box-shadow: var(--shadow-sm);
    }

    .status-indicator {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 12px;
      height: 12px;
      background-color: #2ec4b6;
      border: 2px solid var(--bg-chat);
      border-radius: 50%;
      animation: pulse-online 2s infinite;
    }

    @keyframes pulse-online {
      0% { box-shadow: 0 0 0 0 rgba(46, 196, 182, 0.4); }
      70% { box-shadow: 0 0 0 6px rgba(46, 196, 182, 0); }
      100% { box-shadow: 0 0 0 0 rgba(46, 196, 182, 0); }
    }

    .bot-details h2 {
      font-family: var(--font-heading);
      font-size: 1.05rem;
      font-weight: 700;
    }

    .bot-status {
      font-size: 0.75rem;
      color: #2ec4b6;
      font-weight: 600;
    }

    .chat-messages {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      background-image: radial-gradient(rgba(255, 94, 98, 0.03) 1px, transparent 1px);
      background-size: 24px 24px;
    }

    .message {
      display: flex;
      flex-direction: column;
      max-width: 80%;
      gap: 0.3rem;
      animation: message-appear 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      opacity: 0;
      transform: translateY(10px);
    }

    @keyframes message-appear {
      to { opacity: 1; transform: translateY(0); }
    }

    .bot-message { align-self: flex-start; }
    .user-message { align-self: flex-end; }

    .message-content {
      padding: 1rem 1.25rem;
      border-radius: var(--radius-md);
      font-size: 0.95rem;
      line-height: 1.6;
      box-shadow: var(--shadow-sm);
      word-break: break-word;
    }

    .bot-message .message-content {
      background: var(--gradient-bot-chat);
      border: 1px solid var(--border-light);
      color: var(--text-main);
      border-top-left-radius: 0;
    }

    .user-message .message-content {
      background: var(--gradient-sunset);
      color: #fff;
      border-top-right-radius: 0;
    }

    .message-time {
      font-size: 0.7rem;
      color: var(--text-muted);
    }

    .bot-message .message-time { align-self: flex-start; padding-left: 0.2rem; }
    .user-message .message-time { align-self: flex-end; padding-right: 0.2rem; }

    .message-content p { margin-bottom: 0.75rem; }
    .message-content p:last-child { margin-bottom: 0; }
    .message-content strong { font-weight: 700; }
    .message-content ul, .message-content ol { margin-left: 1.2rem; margin-bottom: 0.75rem; }
    .message-content li { margin-bottom: 0.25rem; }
    .message-content code {
      font-family: monospace;
      background: rgba(0,0,0,0.2);
      padding: 0.1rem 0.3rem;
      border-radius: 4px;
      font-size: 0.9em;
    }

    .chips-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-top: 1rem;
    }

    .suggest-chip {
      background-color: var(--bg-card);
      border: 1px solid var(--border-light);
      color: var(--text-main);
      padding: 0.5rem 0.9rem;
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition-bounce);
      box-shadow: var(--shadow-sm);
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .suggest-chip:hover {
      background: var(--gradient-sunset);
      color: #fff;
      border-color: transparent;
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .chat-input-area {
      padding: 1.5rem 2rem;
      background-color: var(--bg-chat);
      border-top: 1px solid var(--border-light);
    }

    #chat-form { width: 100%; }

    .input-wrapper {
      display: flex;
      background-color: var(--bg-input);
      border: 1px solid var(--border-light);
      border-radius: var(--radius-lg);
      padding: 0.5rem 0.75rem 0.5rem 1.25rem;
      align-items: center;
      gap: 0.8rem;
      box-shadow: var(--shadow-sm);
      transition: var(--transition-smooth);
    }

    .input-wrapper:focus-within {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(255, 94, 98, 0.15);
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

    .send-btn {
      background: var(--gradient-sunset);
      border: none;
      color: #fff;
      width: 42px;
      height: 42px;
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: var(--transition-bounce);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-sm);
      flex-shrink: 0;
    }

    .send-btn:hover {
      transform: scale(1.06) rotate(-10deg);
      background: var(--gradient-sunset-reverse);
      box-shadow: var(--shadow-md);
    }

    .send-btn:disabled {
      background: var(--border-light);
      color: var(--text-muted);
      cursor: not-allowed;
      transform: none;
    }

    .input-footer {
      display: flex;
      justify-content: center;
      margin-top: 0.6rem;
    }

    .input-footer span {
      font-size: 0.7rem;
      color: var(--text-muted);
      letter-spacing: 0.5px;
    }

    .typing-indicator {
      display: flex;
      gap: 4px;
      align-items: center;
      height: 20px;
      padding: 0 4px;
    }

    .typing-dot {
      width: 6px;
      height: 6px;
      background-color: var(--text-muted);
      border-radius: 50%;
      animation: typing-bounce 1.4s infinite ease-in-out both;
    }

    .typing-dot:nth-child(1) { animation-delay: -0.32s; }
    .typing-dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes typing-bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1.0); }
    }

    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: var(--scrollbar-track); }
    ::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb);
      border-radius: var(--radius-full);
    }
    ::-webkit-scrollbar-thumb:hover { background: var(--primary); }

    @media (max-width: 992px) {
      .main-content { grid-template-columns: 350px 1fr; }
    }

    @media (max-width: 800px) {
      body { overflow: auto; height: auto; }
      .app-container { height: auto; min-height: 100vh; }
      .main-content {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        height: auto;
        overflow: visible;
      }
      .attractions-panel { border-right: none; border-bottom: 1px solid var(--border-light); max-height: 480px; }
      .attractions-list { flex-direction: row; overflow-x: auto; overflow-y: hidden; padding-bottom: 1rem; height: auto; }
      .attraction-card { min-width: 280px; height: 100%; }
      .chat-panel { height: 600px; }
    }
  </style>
</head>
<body class="dark-mode">
  <div class="app-container">
    <header class="app-header">
      <div class="logo-container">
        <i class="fa-solid fa-compass logo-icon"></i>
        <h1>Hola Barcelona!</h1>
      </div>
      <div class="header-actions">
        <button id="theme-toggle" class="icon-btn" aria-label="\uD654\uBA74 \uD14C\uB9C8 \uBCC0\uACBD">
          <i class="fa-solid fa-sun icon-sun"></i>
          <i class="fa-solid fa-moon icon-moon"></i>
        </button>
      </div>
    </header>

    <main class="main-content">
      <section class="attractions-panel" aria-label="\uBC14\uB974\uC140\uB85C\uB098 \uC8FC\uC694 \uBA85\uC18C">
        <div class="panel-header">
          <h2><i class="fa-solid fa-map-location-dot"></i> \uB300\uD45C \uCD94\uCC9C \uAD00\uAD11\uC9C0</h2>
          <p>\uCE74\uB4DC\uB97C \uD074\uB9AD\uD558\uC5EC \uCC57\uBD07\uC5D0\uAC8C \uBC14\uB85C \uC9C8\uBB38\uD574 \uBCF4\uC138\uC694!</p>
        </div>
        
        <div class="attractions-list">
          <article class="attraction-card" data-attraction="\uC0AC\uADF8\uB77C\uB2E4 \uD30C\uBC00\uB9AC\uC544" tabindex="0">
            <div class="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80" alt="\uC0AC\uADF8\uB77C\uB2E4 \uD30C\uBC00\uB9AC\uC544 \uC131\uB2F9 \uC804\uACBD" loading="lazy">
              <span class="card-tag">\uAC00\uC6B0\uB514 \uAC78\uC791</span>
            </div>
            <div class="card-content">
              <h3>\uC0AC\uADF8\uB77C\uB2E4 \uD30C\uBC00\uB9AC\uC544</h3>
              <p class="card-desc">\uC548\uD1A0\uB2C8 \uAC00\uC6B0\uB514\uC758 \uBBF8\uC644\uC758 \uAC78\uC791\uC774\uC790 \uBC14\uB974\uC140\uB85C\uB098\uC758 \uB300\uD45C \uC0C1\uC9D5\uBB3C. \uC232\uC744 \uB2EE\uC740 \uAC70\uB300\uD55C \uAE30\uB465\uACFC \uB208\uBD80\uC2E0 \uC2A4\uD14C\uC778\uB4DC\uAE00\uB77C\uC2A4\uAC00 \uB9E4\uB825\uC801\uC785\uB2C8\uB2E4.</p>
              <div class="card-footer">
                <span class="suggest-action"><i class="fa-solid fa-comment-dots"></i> \uCC57\uBD07\uC5D0\uAC8C \uBB3B\uAE30</span>
              </div>
            </div>
          </article>

          <article class="attraction-card" data-attraction="\uAD6C\uC5D8 \uACF5\uC6D0" tabindex="0">
            <div class="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1523531294919-4bea7c65e894?auto=format&fit=crop&w=800&q=80" alt="\uAD6C\uC5D8 \uACF5\uC6D0 \uB3C4\uB9C8\uBC40 \uBD84\uC218\uC640 \uC138\uB77C\uBBF9 \uBCA4\uCE58" loading="lazy">
              <span class="card-tag">\uC720\uB124\uC2A4\uCF54 \uBB38\uD654\uC720\uC0B0</span>
            </div>
            <div class="card-content">
              <h3>\uAD6C\uC5D8 \uACF5\uC6D0</h3>
              <p class="card-desc">\uB3D9\uD654 \uC18D \uC138\uC0C1\uC5D0 \uC628 \uB4EF\uD55C \uBAA8\uC790\uC774\uD06C \uBCA4\uCE58\uC640 \uD0C0\uC77C \uC7A5\uC2DD, \uADF8\uB9AC\uACE0 \uC9C0\uC911\uD574\uAC00 \uD55C\uB208\uC5D0 \uB0B4\uB824\uB2E4\uBCF4\uC774\uB294 \uAC00\uC6B0\uB514\uC758 \uD658\uC0C1\uC801\uC778 \uC790\uC5F0 \uCE5C\uD654\uC801 \uC815\uC6D0 \uB3C4\uC2DC.</p>
              <div class="card-footer">
                <span class="suggest-action"><i class="fa-solid fa-comment-dots"></i> \uCC57\uBD07\uC5D0\uAC8C \uBB3B\uAE30</span>
              </div>
            </div>
          </article>

          <article class="attraction-card" data-attraction="\uCE74\uC0AC \uBC14\uD2B8\uC694" tabindex="0">
            <div class="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1563297007-0686b8c63960?auto=format&fit=crop&w=800&q=80" alt="\uCE74\uC0AC \uBC14\uD2B8\uC694 \uD574\uACE8 \uBAA8\uC591 \uBC1C\uCF54\uB2C8\uC640 \uC624\uC0C9 \uCC2C\uB780\uD55C \uC678\uBCBD" loading="lazy">
              <span class="card-tag">\uAC00\uC6B0\uB514 \uAC74\uCD95\uBB3C</span>
            </div>
            <div class="card-content">
              <h3>\uCE74\uC0AC \uBC14\uD2B8\uC694</h3>
              <p class="card-desc">\uBC14\uB2E4\uC758 \uBB3C\uACB0\uACFC \uBF08\uB97C \uBAA8\uD2F0\uBE0C\uB85C \uC124\uACC4\uB41C \uAC1C\uC131 \uB118\uCE58\uB294 \uC678\uAD00. \uBE5B\uC5D0 \uB530\uB77C \uC0C9\uC774 \uBCC0\uD558\uB294 \uC624\uC0C9 \uD0C0\uC77C\uACFC \uC6A9\uC758 \uB4F1\uC744 \uD615\uC0C1\uD654\uD55C \uC9C0\uBD95\uC774 \uD2B9\uC9D5\uC785\uB2C8\uB2E4.</p>
              <div class="card-footer">
                <span class="suggest-action"><i class="fa-solid fa-comment-dots"></i> \uCC57\uBD07\uC5D0\uAC8C \uBB3B\uAE30</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="chat-panel" aria-label="\uAC00\uC774\uB4DC \uCC57\uBD07 \uB300\uD654\uBC29">
        <div class="chat-header">
          <div class="bot-info">
            <div class="bot-avatar">
              <i class="fa-solid fa-robot"></i>
              <span class="status-indicator"></span>
            </div>
            <div class="bot-details">
              <h2>\uBC14\uB9AC(Bari) - AI \uB85C\uCEEC \uAC00\uC774\uB4DC</h2>
              <span class="bot-status">\uC2E4\uC2DC\uAC04 \uB2F5\uBCC0 \uAC00\uB2A5</span>
            </div>
          </div>
        </div>

        <div class="chat-messages" id="chat-messages">
          <div class="message bot-message">
            <div class="message-content">
              <p>Hola! \u{1F1EA}\u{1F1F8} \uBC14\uB974\uC140\uB85C\uB098 \uC5EC\uD589 \uAC00\uC774\uB4DC <strong>\uBC14\uB9AC(Bari)</strong>\uC785\uB2C8\uB2E4! </p>
              <p>\uC0AC\uADF8\uB77C\uB2E4 \uD30C\uBC00\uB9AC\uC544, \uAD6C\uC5D8 \uACF5\uC6D0 \uB4F1 \uC544\uB984\uB2E4\uC6B4 \uBA85\uC18C \uC18C\uAC1C\uBD80\uD130 \uD604\uC9C0\uC778\uB4E4\uC774 \uAC00\uB294 \uB9DB\uC9D1 \uCD94\uCC9C, \uD6A8\uC728\uC801\uC778 3\uC77C \uC77C\uC815, \uB300\uC911\uAD50\uD1B5 \uC774\uC6A9 \uD301\uAE4C\uC9C0 \uBC14\uB974\uC140\uB85C\uB098\uC5D0 \uAD00\uD55C \uBAA8\uB4E0 \uAC83\uC744 \uBB3C\uC5B4\uBCF4\uC138\uC694!</p>
              
              <div class="chips-container">
                <button class="suggest-chip" data-query="\uBC14\uB974\uC140\uB85C\uB098 3\uC77C \uCD94\uCC9C \uC5EC\uD589 \uCF54\uC2A4\uB97C \uC9DC\uC918.">\u{1F4CD} 3\uC77C \uCD94\uCC9C \uC77C\uC815</button>
                <button class="suggest-chip" data-query="\uBC14\uB974\uC140\uB85C\uB098\uC5D0\uC11C \uAF2D \uBA39\uC5B4\uC57C \uD558\uB294 \uD544\uC218 \uD0C0\uD30C\uC2A4 \uB9DB\uC9D1\uB4E4\uC744 \uCD94\uCC9C\uD574\uC918.">\u{1F958} \uD544\uC218 \uD0C0\uD30C\uC2A4 \uB9DB\uC9D1</button>
                <button class="suggest-chip" data-query="\uBC14\uB974\uC140\uB85C\uB098 \uB300\uC911\uAD50\uD1B5(T-Usual, T-Casual \uB4F1) \uC774\uC6A9 \uD301 \uC54C\uB824\uC918.">\u{1F3AB} \uB300\uC911\uAD50\uD1B5 \uC774\uC6A9 \uD301</button>
                <button class="suggest-chip" data-query="\uAC00\uC6B0\uB514 \uD22C\uC5B4 \uC608\uC57D \uD301\uACFC \uD544\uC218 \uBC29\uBB38 \uBA85\uC18C\uB97C \uC54C\uB824\uC918.">\u{1F3DB}\uFE0F \uAC00\uC6B0\uB514 \uD22C\uC5B4 \uD301</button>
              </div>
            </div>
            <span class="message-time" id="welcome-time">00:00</span>
          </div>
        </div>

        <div class="chat-input-area">
          <form id="chat-form">
            <div class="input-wrapper">
              <textarea id="chat-input" placeholder="\uBC14\uB974\uC140\uB85C\uB098 \uC5EC\uD589\uC5D0 \uB300\uD574 \uBB3C\uC5B4\uBCF4\uC138\uC694... (Shift + Enter \uC904\uBC14\uAFC8)" rows="1" required></textarea>
              <button type="submit" id="send-btn" class="send-btn" aria-label="\uBA54\uC2DC\uC9C0 \uC804\uC1A1">
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
          <div class="input-footer">
            <span>Powered by Gemini 2.5 Flash</span>
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
      API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + API_KEY;
    }

    const SYSTEM_INSTRUCTION = "You are 'Bari' (\uBC14\uB9AC), a passionate, friendly, and expert local travel guide in Barcelona. Your mission is to help tourists have the absolute best experience in Barcelona. Provide useful information including practical travel advice, ticket booking tips, local food recommendations and safety tips. Be warm and reply in Korean.";

    let chatHistory = [];
    let isGenerating = false;

    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const welcomeTime = document.getElementById('welcome-time');

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
      html = html.replace(/\`(.*?)\`/g, '<code>$1</code>');

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
      messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('message-content');
      
      if (isMarkdown) {
        contentDiv.innerHTML = parseMarkdown(text);
      } else {
        const p = document.createElement('p');
        p.textContent = text;
        contentDiv.appendChild(p);
      }

      const timeSpan = document.createElement('span');
      timeSpan.classList.add('message-time');
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
      messageDiv.classList.add('message', 'bot-message', 'typing-message');
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('message-content');
      const indicator = document.createElement('div');
      indicator.classList.add('typing-indicator');
      indicator.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
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
          appendMessage('bot', '\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uB2F5\uBCC0\uC744 \uC0DD\uC131\uD558\uB294 \uC911\uC5D0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.');
        }
      } catch (error) {
        console.error(error);
        hideTypingIndicator();
        appendMessage('bot', 'Gemini API \uD638\uCD9C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ' + error.message);
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
      const chip = e.target.closest('.suggest-chip');
      if (chip) {
        const query = chip.getAttribute('data-query');
        if (query && !isGenerating) {
          appendMessage('user', query);
          callGemini(query);
        }
      }
    });

    document.addEventListener('click', (e) => {
      const card = e.target.closest('.attraction-card');
      if (card) {
        const attractionName = card.getAttribute('data-attraction');
        if (attractionName && !isGenerating) {
          const query = "\uBC14\uB974\uC140\uB85C\uB098\uC758 \uB300\uD45C \uBA85\uC18C\uC778 '" + attractionName + "'\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC18C\uAC1C\uD574 \uC8FC\uACE0, \uBC29\uBB38\uD560 \uB54C \uC54C\uC544\uC57C \uD558\uB294 \uC608\uC57D \uBC0F \uC5EC\uD589 \uD301\uC744 \uC0C1\uC138\uD788 \uC54C\uB824\uC918!";
          appendMessage('user', "'" + attractionName + "' \uBA85\uC18C \uC815\uBCF4 \uBB3C\uC5B4\uBCF4\uAE30");
          callGemini(query);
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      const card = e.target.closest('.attraction-card');
      if (card && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        card.click();
      }
    });

    initTheme();
    updateWelcomeTime();
  <\/script>
</body>
</html>`;
var index_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/chat" && request.method === "POST") {
      try {
        const body = await request.json();
        const API_KEY = "AQ.Ab8RN6LG2sBmfCYsRKYP3yEDSwYzbJf9HsXkGfV5EeHLvpophg";
        const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY;
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });
        if (!response.ok) {
          const errText = await response.text();
          return new Response(errText, {
            status: response.status,
            headers: { "Content-Type": "application/json" }
          });
        }
        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    return new Response(htmlContent, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};

// ../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-XlQ3Iv/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = index_default;

// ../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-XlQ3Iv/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
