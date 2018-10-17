import React, {Component} from 'react';

export default class App extends Component {
    edit = (e) => {
        console.log(e)
    };

    render() {
        const editProps = { contentEditable:"true", onInput: this.edit };

        return (
            <main className="app">
                <table>
                    <tr>
                        <td {...editProps}>FirstName</td>
                        <td {...editProps}>LastName</td>
                    </tr>
                    <tr>
                        <td {...editProps}>FirstName</td>
                        <td {...editProps}>LastName</td>
                    </tr>
                </table>
            </main>
        );
    }
}
