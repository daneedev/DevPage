import colors from 'colors';

function logSuccess(message: string) : void {
    console.log(colors.green("[SUCCESS] ") + message)
}

function logWarn(message: string) : void {
    console.log(colors.yellow("[WARN] ") + message)
}

function logInfo(message: string) : void {
    console.log(colors.blue("[INFO] ") + message)
}

function logError(message: string) : void {
    console.log(colors.red("[ERROR] ") + message)
}

export default {
    logSuccess,
    logWarn,
    logInfo,
    logError
}