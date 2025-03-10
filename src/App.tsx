import React from 'react';

type State = {
  button: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    button: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', event => {
      this.setState({ button: event.key });
    });
  }

  render(): React.ReactNode {
    const { button } = this.state;

    return (
      <div className="App">
        {button ? (
          <p className="App__message">The last pressed key is [{button}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
