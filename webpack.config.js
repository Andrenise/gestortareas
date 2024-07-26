const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de la app
    output: {
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    moduele: {
        rules:[
            {
                test: /\.css$/, //regex para identificar archivos js
                use: ['style-loader', 'css-loader'] //loader para procesar de mejor manera archivos de estilos
            },
            {
                test: /\.js$/, //regex para identificar a archivos js
                exclude: /node_modules/, //excluir la carpeta de node modules
                use: {
                    loader: 'babel-loader', //configurar una libreria para pasar el js modenor a js mas antiguo para todos los navegadores
                    options:{
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generarsource para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //carpeta principal del servidor
        compress: trust, //habilitar la compresion gzip
        port: 9000, //puerto del servidor de desarrollo
    },
};