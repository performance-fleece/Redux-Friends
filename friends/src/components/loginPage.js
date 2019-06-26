import React from 'react';

const loginPage = props => {
    return (
      <div className="login-page">
        <h2>Welcome to FriendsList</h2>
        <p>Please use this login info</p>
        <ul>username: 'Lambda School'</ul>
        <ul>password: 'i<3Lambd4'</ul>
        <form>
            <input title="Username" type="text"></input>
            <input title="Password" type="password"></input>
        </form>

      </div>
    );
}