import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import { Button, Typography } from '@mui/material';

export default function LoginGoogle() {
    const [user, setUser] = useState({})
    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
        var decoded = jwt_decode(response.credential);
        setUser(decoded);
        document.getElementById('buttonDiv').hidden = true;
    }
    const handleLogOut = (e) => {
        setUser({});
        document.getElementById('buttonDiv').hidden = false;
    }
    useEffect(() => {
        /* global google*/
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: "22813573488-toj6ntqj9n2gcfc6v0gamff1ctjdd8pc.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { size: "large", text: "Login ", }  // customization attributes
            );
            google.accounts.id.prompt(); // also display the One Tap dialog
        }
    }, []);
    return (
        <div>
            <div id='buttonDiv'></div>
            
            {Object.keys(user).length !== 0 &&
                <Button variant="contained" onClick={handleLogOut}>
                    Logout
                </Button>
            }

            {user &&
                <div>
                    <Typography>
                        {user.name}
                    </Typography>
                </div>
            }
        </div>
    );
}


