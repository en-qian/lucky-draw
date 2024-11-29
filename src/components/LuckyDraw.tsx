import * as utils from '@utils';
import { useState } from 'react';
import '@styles/lucky-draw.scss';
import { toast } from 'react-toastify';

const LuckyDraw = () => {
  const [participant, setParticipant] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);
  const [winner, setWinner] = useState('');
  const [poolWinners, setPoolWinners] = useState<string[]>([]);
  const [histories, setHistories] = useState<string[]>([]);

  const handleInsert = (participant: string) => {
    if (participants.includes(participant)) {
      toast.error(`${participant} exists!`);
      return;
    }

    setParticipants(utils.removeDuplicateValue([...participants, participant]));
  };

  return (
    <div className="lucky-draw" style={{ padding: '20px' }}>
      <div className="container">
        <h1>Lucky Draw</h1>

        <div className="lucky-draw-wrapper">
          <div className="insert-participant-wrapper">
            <p>Insert Participant</p>
            <form className="insert-form" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                value={participant}
                onChange={e => setParticipant(e.target.value)}
                placeholder="Enter participant..."
              />
              <button
                value={'submit'}
                onClick={() => handleInsert(participant)}
              >
                Insert
              </button>
            </form>
          </div>

          <div className="participants-container">
            <h2>Participants</h2>
            <div className="participants">
              {participants.length > 0 ? (
                participants.map((participant, index) => (
                  <div className="participant" key={index}>
                    <p title={participant}>{participant}</p>
                    <span
                      className="remove-participant"
                      onClick={() => {
                        const filtered = participants.filter(
                          (p, pIndex) => pIndex !== index
                        );

                        setParticipants(filtered);
                      }}
                    >
                      Remove
                    </span>
                  </div>
                ))
              ) : (
                <p className="no-participant">No Participant</p>
              )}
            </div>

            {poolWinners.length > 0 ? (
              <div className="current-pool-winners-container">
                <h3>Current Pool Winners</h3>
                <div className="current-pool-winners">
                  {poolWinners.map((winner, index) => (
                    <div className="current-pool-winner" key={index}>
                      {winner}
                    </div>
                  ))}
                </div>

                {participants.length <= 1 ? (
                  <div className="roll-button">
                    <span
                      className="re-roll"
                      onClick={() => {
                        setParticipants([...participants, ...poolWinners]);
                        setPoolWinners([]);
                      }}
                    >
                      Re-Roll
                    </span>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}

            {winner.length > 0 ? (
              <div className="result-container">
                <p className="result-winner">
                  Winner: <span>{winner}</span>
                </p>
              </div>
            ) : (
              ''
            )}
          </div>

          {participants.length > 1 ? (
            <>
              <div className="roll-button">
                <span
                  onClick={() => {
                    const winner = utils.getRandomValue(participants)!;

                    setWinner(winner);
                    setPoolWinners([...poolWinners, winner]);

                    const filtered = participants.filter(p => p !== winner);

                    setParticipants(filtered);
                    setHistories([...histories, winner]);

                    toast.success(`Winner: ${winner}`);
                  }}
                >
                  Roll
                </span>
                <span
                  className="re-roll"
                  onClick={() => {
                    setParticipants([...participants, ...poolWinners]);
                    setPoolWinners([]);
                    setWinner('');
                  }}
                >
                  Re-Roll
                </span>

                <span
                  className="clear-button"
                  onClick={() => {
                    setParticipants([]);
                    setPoolWinners([]);
                    setWinner('');
                  }}
                >
                  Clear
                </span>
              </div>
            </>
          ) : (
            ''
          )}

          {histories.length > 0 ? (
            <div className="history-winners-container">
              <div className="history-winners-wrapper">
                <h3>Histories</h3>
                <div className="history-winners">
                  {histories.map((history, index) => (
                    <div key={index} className="history-winner">
                      {history}
                    </div>
                  ))}
                </div>
                <div className="clear-history">
                  <span
                    onClick={() => {
                      setHistories([]);
                      setWinner('');
                    }}
                  >
                    Clear History
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default LuckyDraw;
