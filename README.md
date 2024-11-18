<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>i love you</title>
    <style>
        /* Styling Umum */
        
        body {
            background-color: #ffe6e6;
            font-family: 'Poppins', Arial, sans-serif;
            text-align: center;
            padding: 50px;
            margin: 0;
        }
        
        h1 {
            font-size: 36px;
            color: #ff4d4d;
            margin-bottom: 20px;
        }
        /* Animasi Hati */
        
        .heart {
            color: red;
            font-size: 60px;
            animation: heartbeat 1.5s infinite;
        }
        
        @keyframes heartbeat {
            0%,
            100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.2);
            }
        }
        /* Styling Pesan */
        
        .message {
            font-size: 24px;
            color: #ff4d4d;
            margin-top: 20px;
        }
        
        #loveMessage p {
            font-size: 20px;
            color: #4d4d4d;
            background: #ffffff;
            padding: 15px;
            margin-top: 20px;
            border-radius: 10px;
            display: inline-block;
            animation: fadeIn 1s ease-in-out;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        /* Styling Tombol */
        
        .button {
            background-color: #ff6666;
            border: none;
            color: white;
            padding: 15px 32px;
            font-size: 16px;
            font-weight: bold;
            margin: 20px 2px;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(255, 102, 102, 0.4);
            transition: all 0.3s ease;
        }
        
        .button:hover {
            background-color: #ff4d4d;
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(255, 102, 102, 0.6);
        }
    </style>
</head>

<body>
    <h1>HALLO TETEH SAYANG </h1>
    <div class="heart">&#10084;&#65039;</div>
    <div class="message">Klik tombol untuk pesan cinta!</div>
    <button class="button" onclick="showMessage()">Klik Aku</button>
    <div id="loveMessage"></div>

    <script>
        function showMessage() {
            const messages = [
                "Aku sayang kamu lebih dari kata-kata bisa ungkapkan.",
                "Kamu adalah alasan aku tersenyum setiap hari.",
                "Hidupku menjadi lebih indah sejak ada kamu.",
                "Kamu adalah bintang di langitku.",
                "Cintaku padamu tak akan pernah pudar.",
                "Bersama kamu, aku merasa lengkap.",
                "Kamu adalah jawaban dari semua doa-doaku."
            ];

            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            document.getElementById("loveMessage").innerHTML = `<p>${randomMessage}</p>`;
        }
    </script>
</body>

</html>
