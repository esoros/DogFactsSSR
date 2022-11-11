Dog Facts SSR
------------------

What if I told you that HTML and json are the same?

With SSR, developers no longer need APIS - applications can be
pre-rendered on the screen, and then updating logic sent to
to refresh. Instead of sending down JSON, everything is just
html.

Here's Index.html
```
<html>
    <head>
        <style>
            div {
                display: flex;
                flex-direction: column;
                height: 100vh;
                align-items: center;
                justify-content: center;
            }

            button {
                width: 20rem;
            }
        </style>
    </head>
    <body>
        <div>
            <p>Today's dog facts</p>
            <p id="fact">{{fact}}</p>
            <button onclick="refresh()">Refresh</button>
        </div>
    </body>
    <script>
        async function refresh() {
            let text = await fetch("index.html").then(resp => resp.text())
            let templateElement = document.createElement("html")
            templateElement.innerHTML = text
            let node = templateElement.querySelector("#fact")
            let fact = node.innerHTML 
            document.getElementById("fact").innerText = fact
        }
    </script>
</html>
```

Instead of making a SPA, we can pre-render the components on the server, and include data fetching logic that calls back 
into the server to fetch other parts of the system using HTML.

This is more efficient, you no longer need two software units
and a army of auto-mappers to deploy a software project.