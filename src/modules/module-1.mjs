
const executions = []

export function print(text) {
    console.log(text)
    addExecution({ name: 'print', content: text, timestamp: Date.now() })
}

export function printTable(obj) {
    console.table(obj)
    addExecution({ name: 'printTable', content: JSON.stringify(obj), timestamp: Date.now() })
}

function addExecution(ex) {
    executions.push(ex)
    console.log('Module 1 executions list:', executions)
}

// function PrintModule() {
//     const executions = []
//
//
//     function print(text) {
//         console.log(text)
//         addExecution({ name: 'print', content: text, timestamp: Date.now() })
//     }
//
//     function printTable(obj) {
//         console.table(obj)
//         addExecution({ name: 'printTable', content: JSON.stringify(obj), timestamp: Date.now() })
//     }
//
//     function addExecution(ex) {
//         executions.push(ex)
//         console.log('Module 1 executions list:', executions)
//     }
//
//     return {
//         print,
//         printTable
//     }
// }
//
// const pModule = PrintModule()
// const pModule2 = PrintModule()
//
// console.log(pModule)
//
// pModule.print('some text')
// pModule2.print('some text 2')
//
//
//
//
//
//







