const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80 || 443;
const cors = require('cors');






app.use(express.urlencoded({ extended:false }));
app.use(cors())

app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT,()=>{console.log(`Server has been FIRED on PORT${PORT}`)});
