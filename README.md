# lab
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #login {
            display: flex;
            justify-content: center;
            padding-top: 30px;
        }
        .Login-form {
            border: 2px solid black;
            border-radius: 10px;
            width: 450px;
            height: 350px;

        }
        h1 {
            text-align: center;
        }
        form {
            text-align: center;
            margin: 2rem;
        }

        input {
            margin: .7rem;
            height: 1.7rem;
            width: 16rem;
        }
        button {
            margin-top: 2rem;
            height: 2rem;
            width: 16rem;
            border-radius: 1rem;
            border: none;
            font-family: monospace;
            columns: white;
            background-color: crimson;

        }
        button:hover {
            color: white;
            background-color: black;
            text-align: center;
            cursor: pointer;
        }
    </style>

</head>

<body>
    <div id="Login">
        <div class="Login-form">
            <h1>Login Form</h1>
            <div class="cart">
                <form action="/Login" method="post">
                    <label>Full Name :</label>
                    <input type="text" name="fullname" placeholder="Enter Your Full Name"><br><br>
                    <label>Password :</label>
                    <input type="password" name=" password" placeholder="Enter Your Last name">
                    <br>
                    <button type="submit">LOG IN </button>
                </form>
            </div>
        </div>
    </div>
</body>

</html>

**DISCRIPTION OF CODE**
https://docs.google.com/document/d/182e7Q3mNKrIApeo3CwrmYV3aQpBx19CJ-Bezewd07Bo/edit


