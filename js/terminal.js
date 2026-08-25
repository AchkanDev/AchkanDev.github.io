/* ==========================================================================
   Antigravity CV/Portfolio Interactive Terminal Shell - Ashkan Abavi
   ========================================================================== */

class TerminalShell {
  constructor(bodyId, inputId) {
    this.body = document.getElementById(bodyId);
    this.input = document.getElementById(inputId);
    if (!this.body || !this.input) return;

    this.history = [];
    this.historyIndex = -1;

    this.commands = {
      help: () => `
<span style="color:#f8fafc; font-weight:bold;">Available Interactive Commands:</span>
  <span style="color:#00f2fe">about</span>        - Senior Engineer summary & background
  <span style="color:#00f2fe">skills</span>       - Core technical stack & architecture breakdown
  <span style="color:#00f2fe">projects</span>     - Published apps & store metrics (Google Play, App Store)
  <span style="color:#00f2fe">architecture</span> - Clean Architecture & modular feature isolation breakdown
  <span style="color:#00f2fe">impeller</span>     - 120 FPS Impeller rendering & Zero-Jank execution rules
  <span style="color:#00f2fe">dart</span>         - Live Dart 3.x Pattern Matching & BLoC isolate snippet
  <span style="color:#00f2fe">contact</span>      - Direct email, GitHub, Telegram & LinkedIn
  <span style="color:#00f2fe">motto</span>        - Engineering philosophy
  <span style="color:#00f2fe">github</span>       - Open GitHub profile in new tab
  <span style="color:#00f2fe">clear</span>        - Clear terminal screen
      `,
      about: () => `
<span style="color:#4facfe; font-weight:bold;">[Ashkan Abavi / AchkanDev]</span>
Senior Mobile Application Engineer & Cross-Platform Systems Architect.
Specialized in Feature-First Clean Architecture, BLoC State Management, Impeller 120 FPS Graphics, and Resilient Offline Database Synchronization.
Apps published globally on Google Play Store, Apple App Store, CafeBazaar, and Myket.
      `,
      skills: () => `
<span style="color:#10b981; font-weight:bold;">Core Technical Competencies:</span>
• <strong>Languages:</strong> Dart 3.x (Null-Safety, Records, Patterns, Isolates), JavaScript ES6+
• <strong>Engine & UI:</strong> Flutter SDK (3.x), Impeller Rendering Engine, Material 3, CustomPainters
• <strong>Architecture:</strong> Clean Architecture (Domain/Data/Presentation), BLoC/Cubit, MVVM, SOLID, DI
• <strong>Backend & Cloud:</strong> Firebase Ecosystem (Auth, Firestore, Cloud Messaging, Storage), REST APIs (Dio), WebSockets
• <strong>Database & Offline:</strong> Hive DB, Isar DB, SQLite/Drift, Flutter Secure Storage
• <strong>DevOps & Quality:</strong> GitHub Actions CI/CD, Unit & Widget Testing, Fastlane
      `,
      architecture: () => `
<span style="color:#7f00ff; font-weight:bold;">[Feature-First Clean Architecture System]</span>
┌─────────────────────────────────────────────────────────────┐
│  Presentation Layer: Pages, Widgets, BLoC / ViewModels       │
├─────────────────────────────────────────────────────────────┤
│  Domain Layer (Pure Dart): Entities, Use Cases, Repositories │
├─────────────────────────────────────────────────────────────┤
│  Data Layer: Remote DataSources (Dio/Firebase), Local DBs   │
└─────────────────────────────────────────────────────────────┘
Guarantees 100% testability, zero UI-to-DB coupling, and rapid feature iteration.
      `,
      impeller: () => `
<span style="color:#00f2fe; font-weight:bold;">[Flutter Impeller 120 FPS Zero-Jank Architecture]</span>
• Pre-compiled GLSL shaders eliminating runtime shader compilation jank.
• RepaintBoundary isolation on continuous animations and particle systems.
• Scoped BlocBuilder state rebuilds preventing subtree layout reflows.
• Constant 60/120 FPS performance maintained across low-end and flagship devices.
      `,
      projects: () => `
<span style="color:#e100ff; font-weight:bold;">Featured Production Apps:</span>
1. <span style="color:#00f2fe">WeekiLaw</span>  - AI Legal Assistant & Smart Office (Google Play, App Store, Bazaar)
2. <span style="color:#00f2fe">FrameSanj</span> - PC Hardware FPS Analyzer & Compatibility Estimator (CafeBazaar, Myket)
3. <span style="color:#00f2fe">Mobin</span>     - Spiritual Companion & Qibla Finder (1,500+ Active Installs)
4. <span style="color:#00f2fe">VazheJoo</span>  - Persian Offline Word Generation Algorithm (CafeBazaar, Myket)
5. <span style="color:#00f2fe">Nike Store</span>- Premium E-Commerce Fluid Hero App
      `,
      contact: () => `
<span style="color:#f59e0b; font-weight:bold;">Connect with Ashkan Abavi:</span>
• Email:    <a href="mailto:Ashkan.abavi1@gmail.com" style="color:#00f2fe">Ashkan.abavi1@gmail.com</a>
• GitHub:   <a href="https://github.com/AchkanDev" target="_blank" style="color:#00f2fe">github.com/AchkanDev</a> (826+ commits/yr)
• LinkedIn: <a href="https://linkedin.com/in/achkandev" target="_blank" style="color:#00f2fe">linkedin.com/in/achkandev</a>
• Telegram: <a href="https://t.me/achkandev" target="_blank" style="color:#00f2fe">t.me/achkandev</a>
      `,
      dart: () => `
<span style="color:#00f2fe">// Live Production Dart 3.x Pattern Matching & Clean Architecture</span>
<span style="color:#7f00ff">sealed class</span> UserState {}
<span style="color:#7f00ff">final class</span> UserLoading <span style="color:#7f00ff">extends</span> UserState {}
<span style="color:#7f00ff">final class</span> UserSuccess <span style="color:#7f00ff">extends</span> UserState { <span style="color:#7f00ff">final</span> UserEntity user; UserSuccess(this.user); }
<span style="color:#7f00ff">final class</span> UserFailure <span style="color:#7f00ff">extends</span> UserState { <span style="color:#7f00ff">final</span> String error; UserFailure(this.error); }

<span style="color:#7f00ff">class</span> UserBloc <span style="color:#7f00ff">extends</span> Bloc&lt;UserEvent, UserState&gt; {
  <span style="color:#7f00ff">final</span> GetUserUseCase _getUser;
  UserBloc(this._getUser) : <span style="color:#4facfe">super</span>(UserLoading()) {
    on&lt;LoadUserEvent&gt;((event, emit) <span style="color:#7f00ff">async</span> {
      emit(UserLoading());
      <span style="color:#7f00ff">final</span> result = <span style="color:#7f00ff">await</span> _getUser(event.userId);
      <span style="color:#7f00ff">switch</span> (result) {
        <span style="color:#10b981">case</span> Success(:<span style="color:#7f00ff">final</span> data) => emit(UserSuccess(data)),
        <span style="color:#10b981">case</span> Failure(:<span style="color:#7f00ff">final</span> message) => emit(UserFailure(message)),
      }
    });
  }
}
      `,
      motto: () => `
<span style="color:#ec4899; font-style:italic;">"First, solve the problem. Then, write the code." — John Johnson</span>
<span style="color:#00f2fe; font-style:italic;">"Code is craft. High performance is non-negotiable. ⚡"</span>
      `,
      github: () => {
        window.open('https://github.com/AchkanDev', '_blank');
        return "Opening GitHub profile in a new tab...";
      },
      clear: () => {
        this.body.innerHTML = '';
        return null;
      }
    };

    this.init();
  }

  init() {
    this.printWelcome();
    this.input.addEventListener('keydown', (e) => this.handleKey(e));
  }

  printWelcome() {
    this.printLine('AchkanDev Portfolio CLI [Version 3.0.0 — Flutter & Systems Architect]');
    this.printLine('Type <span style="color:#00f2fe">help</span>, <span style="color:#00f2fe">architecture</span> or <span style="color:#00f2fe">impeller</span> for deep engineering commands.\n');
  }

  printLine(html) {
    if (html === null) return;
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = html;
    this.body.appendChild(line);
    this.body.scrollTop = this.body.scrollHeight;
  }

  handleKey(e) {
    if (e.key === 'Enter') {
      const inputVal = this.input.value.trim().toLowerCase();
      this.input.value = '';

      if (inputVal === '') return;

      this.printLine(`<span class="terminal-prompt">achkandev@portfolio:~$</span> ${inputVal}`);
      this.history.push(inputVal);
      this.historyIndex = this.history.length;

      if (this.commands[inputVal]) {
        const output = this.commands[inputVal]();
        if (output) this.printLine(output);
      } else {
        this.printLine(`<span style="color:#ef4444">Command not found: '${inputVal}'. Type 'help' for available commands.</span>`);
      }
    } else if (e.key === 'ArrowUp') {
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.input.value = this.history[this.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.input.value = this.history[this.historyIndex];
      } else {
        this.historyIndex = this.history.length;
        this.input.value = '';
      }
    }
  }
}
