import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.get("/", (req, res) => {
   // res.json({ message: "HOLA DESDE BACKEND CON HOT RELOAD" });
      res.json({ message: "CAMBIO DE PRUEBA - HOT RELOAD OK" });
})

app.listen(3000, () => {
  console.log("Servidor backend encendido en puerto 3000")
})
