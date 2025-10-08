const express = require('express')
const path = require ('node:path')

const app = express()

process.loadEnvFile()
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, "../static")))

// Para definir el tipo de plantilla
app.set("view engine", "ejs")
// Para indicar donde pondremos las vistas
app.set("views", "./views")

app.get("/", (req, res) => {
    // res.send() <- un texto
    // res.sendFile <- un fichero
    // res.json <- APIs, envía un fichero JSON
    // res.render <- plantillas
    console.log(__dirname);
    // res.sendFile("index.html")
    res.render("index", {
        titulo : "Soy una plantilla EJS",
        descripcion: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est laudantium error deserunt ad ducimus incidunt quae eligendi asperiores nihil odit voluptas distinctio nulla rerum tempora, ipsum quisquam perferendis vitae fuga necessitatibus voluptatem aliquid porro ipsa! Rerum alias molestiae cupiditate repudiandae. In optio deleniti veritatis vel numquam quod aspernatur suscipit.</p>",
        script: "<script>alert('Hola que ase?')</script>"

    })
})

app.get("/aulas", (req, res) => {
    res.render("index", {
        titulo: "Nuestras aulas",
        descripcion : "Nuestras aulas están perfectamente equipadas para la docencia actual."
    })
})

app.use((req, res) => {
    res.status(404).send("<h1>Error 404: Esta ruta no existe en el servidor.</h1>")
})

app.listen(PORT, () => {
    console.log(`Servidor operativo en http://localhost:${PORT}`);
})