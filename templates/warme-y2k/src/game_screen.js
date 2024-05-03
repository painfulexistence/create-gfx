import { Screen } from 'warme-y2k';

class GameScreen extends Screen {
  constructor() {
    super();
  }

  async onEnter() {

  }

  onExit() {
    // document.removeEventListener('keydown', this.handleKeyDownCb);
  }

  onUpdate(ts) {
  }

  onDraw() {
  }

  async handleKeyDown(e) {
  }
}

export { GameScreen };