# Components
Spencer Schneidenbach

---

```jsx
class Test extends React.Component
{
    render() {
        return (
            <div>
                Hello world!
            </div>
        );
    }
}
```

---

```jsx
class Test extends React.Component
{ ... }

class AppComponent extends React.Component
{
    render() {
        return [
            <Test />
            <Test />
        ];
    }
}
```

---

# props

```jsx
class Test extends React.Component
{ 
    render() {
        return (
            <div>
                Hello {this.props.firstName}!
            </div>
        );
    }
}
```

---

# `props`

```jsx
class AppComponent extends React.Component
{
    render() {
        const myName = "spencer";
        return [
            <Test firstName={myName} />
            <Test firstName="spencer" />
        ];
    }
}
```

---

# `state`
```jsx
class Test extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            firstName: "spencer"
        };
    }

    render() {
        return (
            <div>
                Hello {this.state.firstName}!
            </div>
        );
    }
}
```

---

# `children`

```jsx
class Test extends React.Component
{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

class AppComponent extends React.Component
{
    render() {
        return (
            <Test>
                Hello, world!
            </Test>
        )
    }
}
```

---

### Functional components

```jsx
class Test extends React.Component
{
    render() {
        return (
            <div>
                {this.props.firstName}
            </div>
        );
    }
}

const Test = (props) => <div>{props.firstName}</div>
```

---

### Functional components

```jsx
class Test extends React.Component
{
    render() {
        return (
            <div>
                {this.props.firstName}
            </div>
        );
    }
}

const Test = (props) => <div>{props.firstName}</div>
const Test = ({firstName}) => <div>{firstName}</div>
```

---

### Functional components

```jsx
const Test = (props) => <div>{props.firstName}</div>

class TestContainer extends React.Component
{
    componentDidMount() {
        fetch("api/name")
            .then(d => d.json())
            .then(d => this.setState({
                firstName: d.name
            }));
    }

    render() {
        if (this.state.firstName) {
            return <Test firstName={this.state.firstName} />;
        }
        return "Loading...";
    }
}
```

--- 

# Questions?

---

# Lab time