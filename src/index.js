import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button onClick={() => setValue((v) => v + 1)}>+</button>
                <button onClick={() => setVisible(false)}>hide</button>
                <Notification />
            </div>
        );
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    }
};


// const HookCounter = ({ value }) => {

//     // componentDidMount
//     useEffect(() => {
//         console.log('componentDidMount');
//     }, []);

//     // componentDidUpdate
//     useEffect(() => {
//         console.log('componentDidUpdate');
//     });

//     // componentWillUnmount
//     useEffect(() => {
//         return () => {
//             console.log('componentWillUnmount')
//         }
//     }, []);




//     return <p>{value}</p>;
// }

const Notification = () => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false)
        }, 2500);
        return () => clearTimeout(timeout);
    }, [])

    if (visible) {
        return (
            <div>
                <p>Hello</p>
            </div>
        );
    } else {
        return null;
    }
}


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);