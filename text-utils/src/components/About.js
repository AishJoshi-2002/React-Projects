import React from 'react';
import PropTypes from 'prop-types'

export default function About(p) {
    return (
        <section className="container">
            <h1 className='my-4'>{p.title}</h1>
            <p> A TextUtils app for understanding React basics, such as <strong>PROPS</strong>, <strong>STATES</strong> and <strong>REACT HOOKS</strong>. It is divided into three components and app.js as its base component.
                <ol>
                    <li>Navbar component: The component includes the title of the app, Home and About tabs. It also contains a toggle for enabling light and dark mode.</li>
                    <li>TextForm component: The component is responsible for showing the textarea, buttons and text summary.
                        <ul>
                            <li>Convert To UpperCase: updates the task in the user table</li>
                            <li>Convert to LowerCase: Converts the text to Lowercase, uses toLowerCase() function</li>
                            <li>Copy to Clipboard: Copies the text to the clipboard, uses navigator.clipboard.writeText</li>
                            <li>Clear: Clears the textarea, by setting the text as ''</li>
                        </ul>
                    </li>
                    <li>About component: The component provides an overview about the app and the React basics used.</li>
                </ol>
            </p>
        </section>
    );
}

About.propTypes = { title: PropTypes.string }