// Row/Col numbers and padding must have the same ratios!
const NUMBER_ROWS = 10;
const NUMBER_COLS = 8;
const DEFAULT_PADDING_Y = 20;
const DEFAULT_PADDING_X = 16;

// this is a bit big on desktop
// const DEFAULT_CONFIG = { width: 700, height: 875 };
const DEFAULT_CONFIG = { width: 440, height: 550 };

// this might be useless, if we ALWAYS dynamically calculate this.
// const DEFAULT_EDGE_LENGTH = DEFAULT_CONFIG.width / NUMBER_COLS;

const INITIAL_CENTERPOINT = {
  x: NUMBER_COLS / 2,
  y: NUMBER_ROWS / 2,
};

const INITIAL_HANDLES = {
  edges: [],
  legalMoveVertices: [],
  currentPositionDot: null,
  startPositionDot: null,
  graphPaper: null,
  pitchBorders: null,
};

const PLAYER_ONE = 0;
const PLAYER_TWO = 1;

const INITIAL_GAME_MODEL = {
  boxes: {
    pitch: {
      anchor: {
        x: 0,
        y: 0,
      },
      end: {
        x: 0,
        y: 0,
      },
    },
  },
  model: {
    pointList: [INITIAL_CENTERPOINT],
    edgeMap: { [`${INITIAL_CENTERPOINT.x}-${INITIAL_CENTERPOINT.y}`]: [] },
    winner: null,
    turnFor: PLAYER_ONE,
  },
  handles: { ...INITIAL_HANDLES },
};

export {
  NUMBER_ROWS,
  NUMBER_COLS,
  DEFAULT_PADDING_X,
  DEFAULT_PADDING_Y,
  DEFAULT_CONFIG,
  INITIAL_GAME_MODEL,
  PLAYER_ONE,
  PLAYER_TWO,
};