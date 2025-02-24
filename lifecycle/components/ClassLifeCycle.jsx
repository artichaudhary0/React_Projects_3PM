import { Component } from "react";

class ClassLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      logs: [],
      data: null,
      error: null,
    };
    

    // Add initial mounting phase log
    this.state.logs.push({
      phase: "Mounting",
      title: "1. Constructor",
      description:
        "First method called used for \n1 : Initilize state\n2 : Binding methods\n3 : Setting up initial configuration",
      timeStamp: new Date().toLocaleTimeString(),
    });
  }

  static getDerivedStatefromProps(props, state) {
    // This method is called in both mounting and updating phase.
    const phase = state.logs.length === 1 ? "Mounting" : "Updating";
    const order = phase === "Mounting" ? "2" : "1";

    return {
      logs: [
        ...state.logs,
        {
          phase,
          title: `${order} getDerivedStatefromProps`,
          description:
            "Static method called before render. User for\n1 : Syning state with props\n2 : Replace componentWillRecieverProps\n3 : Must return a new state or null",
          timeStamp: new Date().toLocaleTimeString(),
        },
      ],
    };
  }

  componentDidMount() {
    this.setState((prevState) => ({
      logs: [
        ...prevState.logs,
        {
          phase: "Mounting",
          title: "4: componentDidMount",
          description:
            "Called after component is mounted to DOM. used for\n1 : API \n2 : Timmer setup",
          timeStamp: new Date().toLocaleTimeString(),
        },
      ],
    }));

    // Simulate API call :
    setTimeout(() => {
      this.setState({ data: "Fetched" });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      this.setState((prevState) => ({
        logs: [
          ...prevState.logs,
          {
            phase: "Updating",
            title: "2 : shouldComponentUpdate",
            description:
              "Performance optimization method. used for\n1 : Controlling un-necessory re-renders\n2 : Must return true or false",
            timeStamp: new Date().toLocaleTimeString(),
          },
        ],
      }));
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    if (prevState.count !== this.state.count) {
      this.setState((prevState) => ({
        logs: [
          ...prevState.logs,
          {
            phase: "Updating",
            title: "4 : getSnapshotBeforeUpdate",
            description:
              "Called right before DOM updates. Used for\n1: Capturing DOM 2 : Must return value or null",
            timeStamp: new Date().toLocaleTimeString(),
          },
        ],
      }));
    }
    return null;
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.count !== this.state.count) {
      this.setState((prevState) => ({
        logs: [
          ...prevState.logs,
          {
            phase: "Updating",
            title: "5 : componentDidUpdate",
            description:
              "Called right after component update. Used for\n 1 : Side effects render \n2 : Network request based\n3 : DOM manipulation ",
            timeStamp: new Date().toLocaleTimeString(),
          },
        ],
      }));
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      logs: [
        ...prevState.logs,
        {
          phase: "updating",
          title: "3 :  render",
          description:
            "Required method that return JSX Called when\n inital mount\n2: state change\n3 : Props changes\n4 : Parent re-render",
          timeStamp: new Date().toLocaleTimeString(),
        },
      ],
    }));
  };

  componentWillMount() {
    console.log({
      phase: "Unmounting",
      title: "componentWillMount",
      description:
        "Called before component is destroyed Used for\n1 : Clean timmers\n2 : Remove event listners\n3 : Cancel network request",
      timeStamp: new Date().toLocaleTimeString(),
    });
  }

  render() {
    // add render log for inital mounting
    if (this.state.logs.length === 2) {
      setTimeout(() => {
        this.setState((prevState) => ({
          logs: [
            ...prevState.logs,
            {
              phase: "Mounting",
              title: "3 : render",
              description:
                "Required method that return JSX Called when\n inital mount\n2: state change\n3 : Props changes\n4 : Parent re-render",
              timeStamp: new Date().toLocaleTimeString(),
            },
          ],
        }));
      }, 0);
    }

    return (
      <div className="lifecycle-demo">
        <h1>Counter</h1>
        <h3>Count : {this.state.count}</h3>
        <button onClick={this.handleIncrement}>Increment</button>

        <h1>Life cycle logs</h1>
        {this.state.logs.map((log, index) => {
          return (
            // Added return statement here
            <div key={index}>
              <p>{log.phase}</p>
              <p>{log.title}</p>
              <p>{log.description}</p>
              <p>{log.timeStamp}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ClassLifeCycle;
