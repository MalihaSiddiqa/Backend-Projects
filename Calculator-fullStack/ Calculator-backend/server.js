import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/user', (req, res) => {
    res.send('Hello this is Maliha')
})

app.get('/', (req, res) => {
    res.send({
        success: true,
        message: "Hello from server"
    })
})

app.get('/add/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    
    if(isNaN(a) || isNaN(b)) {
        res.send({
            success: false,
            message: 'invalid variables',
            data: null
        })
        
    }
    else {
        res.send({
            success: true,
            message: 'operation successfull',
            data: a + b
        })
    }
        
})

app.get('/sub/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    
    if(isNaN(a) || isNaN(b)) {
        res.send({
            success: false,
            message: 'invalid variables',
            data: null
        })
        
    }
    else {
        res.send({
            success: true,
            message: 'operation successfull',
            data: a - b
        })
    }
        
})

app.get('/multiply/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    
    if(isNaN(a) || isNaN(b)) {
        res.send({
            success: false,
            message: 'invalid variables',
            data: null
        })
        
    }
    else {
        res.send({
            success: true,
            message: 'operation successfull',
            data: a * b
        })
    }
})

app.get('/divide/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    
    if(isNaN(a) || isNaN(b)) {
        res.send({
            success: false,
            message: 'invalid variables',
            data: null
        })
        
    }
    else {
        res.send({
            success: true,
            message: 'operation successfull',
            data: a / b
        })
    }
        
})

app.get('/percentage/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    
    if(isNaN(a) || isNaN(b)) {
        res.send({
            success: false,
            message: 'invalid variables',
            data: null
        })
        
    }
    else {
        res.send({
            success: true,
            message: 'operation successfull',
            data: (a*b)/100
        })
    }
        
})
const PORT=3000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

export default app;