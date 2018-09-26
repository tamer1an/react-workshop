# JSX
Spencer Schneidenbach

---

## What is JSX?

```jsx
class Test extends React.Component
{
    render() {
        return React.createElement('div', null, 'Hello world);
    }
}
```
---

## What is JSX?

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
function helloWorld() {
    return React.createElement('div', null, 'Hello world!');
}

function helloWorld() {
    return <div>Hello world!</div>;
}
```

---

# History

---

# Why?
Isn't HTML and JavaScript together bad?

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
{
    render() {
        const firstName = "spencer";
        return (
            <div>
                Hello {firstName}!
            </div>
        );
    }
}
```

---

```jsx
class Test extends React.Component
{
    render() {
        const firstName = "spencer";
        return (
            <div someProp={firstName}>
                Hello world!
            </div>
        );
    }
}
```

---

# JSX vs HTML

---

# `className`

```jsx
class Test extends React.Component
{
    render() {
        return (
            <div className="col-md-12">
                Hello world!
            </div>
        );
    }
}
```

---

# `htmlFor`
```jsx
class Test extends React.Component
{
    render() {
        return (
            <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" />
            </div>
        );
    }
}
```

---

# Styling
```jsx
class Test extends React.Component
{
    render() {
        return (
            <div style={{marginTop: 12, backgroundColor: ''}}>
                Hello world!
            </div>
        );
    }
}
```

--- 

# Questions?

---

# Lab time