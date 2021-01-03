function Superscript(sc) //Pass any whole number 
{
  var SuperScript={'0':"CHAR(8304)",'1':'CHAR(185)','2':'CHAR(178)','3':'CHAR(179)','4':'CHAR(8308)','5':'CHAR(8309)','6':'CHAR(8310)','7':'CHAR(8311)','8':'CHAR(8312)','9':'CHAR(8313)'} 
  if(sc in SuperScript)
  {
    return SuperScript[sc]
  }
  else
  {
    var n = sc.toString().split('').map(function(item, index) {
      return parseInt(item);
    });
    var str=''
    for(var i=0;i<n.length;i++)
    {
      if(i==0)
      {
        str+=SuperScript[n[i]]
      }
      else
      {
        str+="&"+SuperScript[n[i]]
      }
    }
    
    return str
  }
}


function test()   // Function to show how the Superscipt is represented in the sheet @ cell - C1 
{
  var str="Hello"    //Replace "Hello" with required value
  var n=100
  var ss=SpreadsheetApp.getActiveSheet()
  ss.getRange("C1").setValue('="'+str+'"&'+Superscript(n)+'')   
  SpreadsheetApp.flush();  
}
