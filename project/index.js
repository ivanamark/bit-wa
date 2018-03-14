const figlet = require('figlet');

const createFiglet = () => {
    return figlet.textSync('Boo!', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
}

module.exports = createFiglet;