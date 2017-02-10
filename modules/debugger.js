const fs = require('fs');
require('dotenv').config();
module.exports = {
    getDate() {
        // setup variables for dataobject, month, day, year
        var dateObj = new Date();
        var month = dateObj.getMonth() + 1;
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        var date = year + '_' + month + '_' + day;
        return date;
    },

    getTime() {
        // setup variables for dateobject
        var dateObj = new Date;
        var hour = dateObj.getHours();
        var min = dateObj.getMinutes();
        if(min < 10){
            min = `${0}` + min;
        }
        var sec = dateObj.getSeconds()
        var time = hour + ':' + min + ':' + sec;
        return time;
    },

    debugWarn() {
        var debug = process.env.DEBUG
        // if debug is true then send the message
        if(debug === 'true'){
            console.warn('Debug mode active!');
        };
    },

    debug(data) {
        var debug = process.env.DEBUG;
        if (debug === 'true'){
            // setup variables for logdata, logreq, date, time
            var logData = '';
            var logReq = '';
            var date = this.getDate();
            var time = this.getTime();
            // setup variables for the colors
            var successColor = '\x1b[32m';
            var errorColor = '\x1b[31m';
            var defaultColor = '\x1b[34m';
            var resetColor = '\x1b[0m';
            var type = defaultColor + data.type.toUpperCase() + resetColor;
            if(data.data && ! data.data.data && data.type != 'error'){
                data.type = "warning - null";
            }
            if(data.type === 'success'){
                type = successColor + data.type.toUpperCase() + resetColor;
            }
            else if(data.type === 'error'){
                type = errorColor + data.type.toUpperCase() + resetColor;
            }
            else{
                type = defaultColor + data.type.toUpperCase() + resetColor;
            }

            var logMsg = "\nDetails: " + time + " @ " + data.location + "\n" + type + "\n" + data.msg;
            var logFile = "\nDetails: " + time + " @ " + data.location + "\n" + data.type.toUpperCase() + "\n" + data.msg;

            if(data.data && data.type != 'error'){
                logData = "\nData: \n-- "+JSON.stringify(data.data).split(",").join("\n    ").replace(/[{}"]/g , " ");
            }

            if(data.type === "error"){
                logData = "\nData: \n "+ data.data;
            }

            if(data.request){
                logReq = "\nData: \n-- " + JSON.stringify(data.request).split(",").join("\n    ").replace(/[{}"]/g , " ");
            }

            logMsg += logData
            logMsg += logReq
            logFile += logData
            logFile += logReq

            fs.appendFile('../logs/log_' + date + '.log', '\n' + logFile, (err) => {

                if (err) throw err;

                var consoleDebug = process.env.DEBUG_CONSOLE

                // if console.debug is true then console log the logmsg
                if (consoleDebug === 'true'){
                    console.log(logMsg);
                }
         });
     } else{}
    },

    //setup message with data and location
    msg(data, loc) {
        // if theres not a location information then send this
        if(loc === undefined){
            loc = 'There isnt any location information!';
        }
        // set vars for debug and consoledebug (environmental variables)
        var debug = process.env.DEBUG
        var consoleDebug = process.env.DEBUG_CONSOLE
        if (debug === 'true' && consoleDebug === 'true'){
          // console log the message
            console.log("\x1b[91mMessage:\x1b[0m " + data + '\n-- @ ' + loc)
        }
        this.saveMsg(data, loc)
    },

    saveMsg(data, loc) {
        var date = this.getDate();
        var time = this.getTime();
        var debug = process.env.DEBUG;
        var msgSave = process.env.DEBUG_MSG_LOG;
        if(loc === undefined){
            loc = 'There isnt any location information!';
        }
        if(debug === 'true' && msgSave === 'true') {
            // create the log
            msgLog = 'Message @ ' + time + ' (' + loc + '): ' + data + '\n';
            // append entry to the current day's log
            fs.appendFile('../logs/debugger_' + date + '.log', msgLog, (err) => {
                if (err) throw err;
            });
        }
    }
}
