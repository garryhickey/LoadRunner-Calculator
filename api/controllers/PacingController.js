/**
 * PacingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    calculate : function (req, res) {
        
        var users = parseInt(req.param('numberOfUsers'));
        var executions = parseInt(req.param('executionsPerHour'));
        var transactions = parseInt(req.param('transactionsPerScenario'));
        var response = parseInt(req.param('E2EResponseTime'));
        var thinktime = parseInt(req.param('thinkTime'));

        var totalthinktime = (((transactions - 1) * thinktime) + response);
        
        var tps = (executions / 3600);

       
       var pacing = (users / tps);

       var pacingOption2 = (pacing - totalthinktime);

       if (totalthinktime > pacing)
       {
           console.log ("No Pacing is required")
       }

       if (isNaN(pacing)) {
           pacing = 0;

       }


       if (isNaN(pacingOption2)) {
        pacingOption2 = 0;

    }

       console.log("Total Think time is : " + totalthinktime);
       console.log ("The TPS is : " + tps);
       console.log("The pacing per iteration if option 3 is selected : " + pacing);
       console.log("The pacing per iteration if option 2 is selected : " + pacingOption2);


        res.view('pacing', {
            pacingResult : pacing,
            pacingResult2 : pacingOption2
        });

    }

};

