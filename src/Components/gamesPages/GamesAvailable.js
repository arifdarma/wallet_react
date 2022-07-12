function GamesAvailable(props) {
  const { games, submitGames, clicked } = props;
  return (
    <div>
      <div className="row justify-content-center">
        <div className={(clicked.includes(games[0]) ? 'col-4 boxCol' : 'col-4 boxColNotClicked')}>
          <button type="button" value={games[0]} onClick={submitGames}>{games[0]}</button>
        </div>
        <div className={(clicked.includes(games[1]) ? 'col-4 boxCol' : 'col-4 boxColNotClicked')}>
          <button type="button" value={games[1]} onClick={submitGames}>{games[1]}</button>
        </div>
        <div className={(clicked.includes(games[2]) ? 'col-4 boxCol' : 'col-4 boxColNotClicked')}>
          <button type="button" value={games[2]} onClick={submitGames}>{games[2]}</button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className={(clicked.includes(games[3]) ? 'col-4 boxCol' : 'col-4 boxColNotClicked')}>
          <button type="button" value={games[3]} onClick={submitGames}>{games[3]}</button>
        </div>
        <div className={(clicked.includes(games[4]) ? 'col-4 boxCol' : 'col-4 boxColNotClicked')}>
          <button type="button" value={games[4]} onClick={submitGames}>{games[4]}</button>
        </div>
        <div className={(clicked.includes(games[5]) ? 'col-4 boxCol' : 'col-4 boxColNotClicked')}>
          <button type="button" value={games[5]} onClick={submitGames}>{games[5]}</button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className={(clicked.includes(games[6]) ? 'col-4 boxCol' : 'col-4 boxColNotClicked')}>
          <button type="button" value={games[6]} onClick={submitGames}>{games[6]}</button>
        </div>
        <div className={(clicked.includes(games[7]) ? 'col-4 boxCol' : 'col-4 boxColNotClicked')}>
          <button type="button" value={games[7]} onClick={submitGames}>{games[7]}</button>
        </div>
        <div className={(clicked.includes(games[8]) ? 'col-4 boxCol' : 'col-4 boxColNotClicked')}>
          <button type="button" value={games[8]} onClick={submitGames}>{games[8]}</button>
        </div>
      </div>
    </div>
  );
}
export default GamesAvailable;
