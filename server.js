import express from "express";
import publicRoutes from './routes/public.js'


const app = express();
app.use(express.json());

app.use('/', publicRoutes);


app.listen(3000, () => console.log("Servidor Rodando 🚀"));

// mongodb+srv://igoruser07_db_user:KlAPisxU62IWS584@cluster0.4bfdu7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0