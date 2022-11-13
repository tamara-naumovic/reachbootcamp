import React from "react";

const exports = {};


exports.GetHand = class extends React.Component {
  render() {
    const { parent, playable, hand } = this.props;
    return (
      <div>
        {hand ? "It was a draw! Pick again." : ""}
        <br />
        {!playable ? "Please wait..." : ""}
        <br />
        {"Please pick a hand"}
        <br />
        <br />
        <button disabled={!playable} onClick={() => parent.playHand(0)}>
          Zero
        </button>
        <button disabled={!playable} onClick={() => parent.playHand(1)}>
          One
        </button>
        <button disabled={!playable} onClick={() => parent.playHand(2)}>
          Two
        </button>
        <button disabled={!playable} onClick={() => parent.playHand(3)}>
          Three
        </button>
        <button disabled={!playable} onClick={() => parent.playHand(4)}>
          Four
        </button>
        <button disabled={!playable} onClick={() => parent.playHand(5)}>
          Five
        </button>
      </div>
    );
  }
};

exports.GetResult = class extends React.Component {
  render() {
    //constants ?
    const { parent, playable, result } = this.props;
    return (
      <div>
        {result ? "It was a draw, result again!" : ""}
        <br />
        {!playable ? "Please Wait..." : ""}
        <br />
        {"Please result the total"}
        <br />
        <br />
        <button disabled={!playable} onClick={() => parent.playResult(0)}>
          Zero
        </button>
        <button disable={!playable} onClick={() => parent.playResult(1)}>
          One
        </button>
        <button disable={!playable} onClick={() => parent.playResult(2)}>
          Two
        </button>
        <button disable={!playable} onClick={() => parent.playResult(3)}>
          Three
        </button>
        <button disable={!playable} onClick={() => parent.playResult(4)}>
          Four
        </button>
        <button disable={!playable} onClick={() => parent.playResult(5)}>
          Five
        </button>
        <button disable={!playable} onClick={() => parent.playResult(6)}>
          Six
        </button>
        <button disable={!playable} onClick={() => parent.playResult(7)}>
          Seven
        </button>
        <button disable={!playable} onClick={() => parent.playResult(8)}>
          Eight
        </button>
        <button disable={!playable} onClick={() => parent.playResult(9)}>
          Nine
        </button>
        <button disable={!playable} onClick={() => parent.playResult(10)}>
          Ten
        </button>
      </div>
    );
  }
};



exports.WaitingForResults = class extends React.Component {
  render() {
    return <div>Waiting for results...</div>;
  }
};

exports.Done = class extends React.Component {
  render() {
    const { outcome } = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />
        {outcome || "Unknown"}
      </div>
    );
  }
};

exports.Timeout = class extends React.Component {
  render() {
    return <div>There's been a timeout. (Someone took too long.)</div>;
  }
};

export default exports;