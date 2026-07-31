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
Available Commands:
  <span style="color:#00f2fe">about</span>     - View developer summary & background
  <span style="color:#00f2fe">skills</span>    - List core technical stack & proficiency
  <span style="color:#00f2fe">projects</span>  - List published apps & repositories
  <span style="color:#00f2fe">contact</span>   - Get email, GitHub & LinkedIn links
  <span style="color:#00f2fe">dart</span>      - Run live Dart Clean Architecture snippet
  <span style="color:#00f2fe">motto</span>     - Print coding philosophy
  <span style="color:#00f2fe">github</span>    - Open GitHub profile in new tab
  <span style="color:#00f2fe">clear</span>     - Clear terminal screen
      `,
      about: () => `
<span style="color:#4facfe; font-weight:bold;">[Ashkan Abavi / AchkanDev]</span>
Senior Flutter Developer & Cross-Platform Architect.
Specialized in Clean Architecture, BLoC State Management, Firebase Ecosystem, and High-Performance Mobile Applications (60 FPS Impeller).
      `,
      skills: () => `
<span style="color:#10b981; font-weight:bold;">Core Technical Stack:</span>
• Flutter & Dart (Expert)
• Clean Architecture & MVVM (Advanced)
• BLoC / Provider / Riverpod State Management (Advanced)
• Firebase (Auth, Firestore, Storage, Cloud Messaging) (Expert)
• RESTful APIs, JSON, WebSockets, Dio (Advanced)
• UI/UX Motion Systems & Custom Animations (Expert)
• Git & GitHub Actions CI/CD (Proficient)
• Offline Sync (Hive, Isar, Drift) (Advanced)
      `,
      projects: () => `
<span style="color:#e100ff; font-weight:bold;">Featured Published Apps:</span>
1. <span style="color:#00f2fe">FrameSanj</span> - PC Game Compatibility & Performance Analyzer (CafeBazaar & Myket)
2. <span style="color:#00f2fe">WeekiLaw</span> - AI-Powered Legal Services Platform
3. <span style="color:#00f2fe">Mobin</span> - Spiritual Companion App (1,500+ Active Installs)
4. <span style="color:#00f2fe">VazheJoo</span> - Persian Offline Word Finder
5. <span style="color:#00f2fe">Nike Store</span> - Premium E-Commerce Flutter App
6. <span style="color:#00f2fe">Instagram Clone</span> - Full-Stack Flutter + Firebase
      `,
      contact: () => `
<span style="color:#f59e0b; font-weight:bold;">Connect with Ashkan Abavi:</span>
Email:    Ashkan.abavi1@gmail.com
GitHub:   https://github.com/AchkanDev
LinkedIn: https://linkedin.com/in/achkandev
Telegram: https://t.me/achkandev
      `,
      dart: () => `
<span style="color:#00f2fe">// Live Dart Clean Architecture Snippet</span>
<span style="color:#7f00ff">abstract class</span> AppRepository {
  <span style="color:#4facfe">Future</span>&lt;<span style="color:#10b981">Either</span>&lt;Failure, UserEntity&gt;&gt; fetchUser(<span style="color:#4facfe">String</span> id);
}

<span style="color:#7f00ff">class</span> UserBloc <span style="color:#7f00ff">extends</span> Bloc&lt;UserEvent, UserState&gt; {
  <span style="color:#7f00ff">final</span> GetUserUseCase _useCase;
  UserBloc(this._useCase) : <span style="color:#4facfe">super</span>(UserInitial()) {
    on&lt;LoadUser&gt;((event, emit) <span style="color:#7f00ff">async</span> {
      emit(UserLoading());
      <span style="color:#7f00ff">final</span> result = <span style="color:#7f00ff">await</span> _useCase(event.id);
      result.fold((l) => emit(UserError(l.message)), (r) => emit(UserLoaded(r)));
    });
  }
}
      `,
      motto: () => `
<span style="color:#ec4899; font-style:italic;">"First, solve the problem. Then, write the code." — John Johnson</span>
<span style="color:#00f2fe; font-style:italic;">"Code is craft. Craft it beautifully. 🎨"</span>
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
    this.printLine('AchkanDev Portfolio CLI [Version 2.5.0]');
    this.printLine('Type <span style="color:#00f2fe">help</span> or <span style="color:#00f2fe">dart</span> to view available commands & Dart code.\n');
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
